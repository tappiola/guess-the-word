<script>
	import Keyboard from "./Keyboard.svelte";
	import Field from "./Field.svelte";
	import SubmitButton from "./SubmitButton.svelte";
	import ResetButton from "./ResetButton.svelte";
	import ClearGuessButton from "./ClearGuessButton.svelte";
	import KeypressListener from "./KeypressListener.svelte";
</script>

<main>
	<Field/>
	<Keyboard/>
	<div class="action-buttons">
		<ClearGuessButton/>
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
