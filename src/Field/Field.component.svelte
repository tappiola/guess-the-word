<script>
	import {attemptsCount, activeRow, guessedWords} from "../stores";
	import FieldRow from "../FieldRow";

	export let setup;
</script>

<div class="field">
	{#each Array($attemptsCount) as word, i}
		<FieldRow word={setup[i] || ''} isActiveRow={i === $activeRow} isRevealed={$guessedWords.length > i}/>
	{/each}
</div>

<style>
	.field {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>