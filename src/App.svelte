<script>
	import Keyboard from "./Keyboard.svelte";
	import Field from "./Field.svelte";
	import SubmitButton from "./SubmitButton.svelte";
	import ResetButton from "./ResetButton/ResetButton.container.svelte";
	import DeleteButton from "./DeleteButton.svelte";
	import KeypressListener from "./KeypressListener.svelte";
	import GameStatuses from "./GameStatuses.svelte";
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
	<GameStatuses/>
</main>

<style>
	main {
		height: 100%;
		/*display: grid;*/
		/*grid-auto-rows: auto min-content 60px;*/
	}

	.action-buttons {
		display: flex;
		justify-content: center;
		margin-top: 15px;
	}
</style>
