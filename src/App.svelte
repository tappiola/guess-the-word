<script>
	import Keyboard from "./Keyboard";
	import Field from "./Field";
	import SubmitButton from "./SubmitButton";
	import ResetButton from "./ResetButton";
	import DeleteButton from "./DeleteButton";
	import KeypressListener from "./KeypressListener.svelte";
	import GameStatuses from "./GameStatuses";
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
	}

	.action-buttons {
		display: flex;
		justify-content: center;
		margin-top: 15px;
		height: 52px;
	}
</style>
