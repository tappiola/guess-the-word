<script>
	import Keyboard from "./Keyboard.svelte";
	import Field from "./Field.svelte";
	import SubmitButton from "./SubmitButton.svelte";
	import ResetButton from "./ResetButton/ResetButton.container.svelte";
	import DeleteButton from "./DeleteButton.svelte";
	import KeypressListener from "./KeypressListener.svelte";
	import {GAME_STATUS} from "./constants";
	import {gameStatus, isAnimating, targetWord} from "./stores";

	$: if($gameStatus === GAME_STATUS.WON && !$isAnimating){
		alert('You won');
	}

	$: if($gameStatus === GAME_STATUS.LOST && !$isAnimating){
		alert('You lost '+ $targetWord.toUpperCase());
	}

	$: console.log($targetWord);
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
</main>

<style>
	.action-buttons {
		display: flex;
		justify-content: center;
		margin-top: 15px;
	}
</style>
