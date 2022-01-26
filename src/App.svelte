<script>
	import Keyboard from "./Keyboard.svelte";
	import Field from "./Field.svelte";
	import SubmitButton from "./SubmitButton.svelte";
	import ResetButton from "./ResetButton/ResetButton.container.svelte";
	import DeleteButton from "./DeleteButton.svelte";
	import KeypressListener from "./KeypressListener.svelte";
	import {GAME_STATUS} from "./constants";
	import {gameStatus, isAnimating, targetWord} from "./stores";
	import Notification from "./Notification.svelte";

	let showWinModal = false;
	let showLoseModal = false;

	$: if($gameStatus === GAME_STATUS.WON && !$isAnimating){
		showWinModal = true;
		setTimeout(() => {showWinModal = false}, 2000);
	}

	$: if($gameStatus === GAME_STATUS.LOST && !$isAnimating){
		showLoseModal = true;
		setTimeout(() => {showLoseModal = false}, 2000);
	}
</script>

<main>
	<Field/>
	<Keyboard/>
	<div class="action-buttons">
		<DeleteButton/>
		<SubmitButton/>
		<ResetButton/>
	</div>
	<KeypressListener/>
	<Notification showModal={showWinModal}>You won!!!</Notification>
	<Notification showModal={showLoseModal}>{'You lost '+ $targetWord.toUpperCase()}</Notification>
</main>

<style>
	.action-buttons {
		display: flex;
		justify-content: center;
		margin-top: 15px;
	}
</style>
