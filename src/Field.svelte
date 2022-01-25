<script>
	import {activeRow, attemptsCount, currentGuess, guessedWords} from "./stores";
	import FieldRow from "./FieldRow.svelte";

	$: setup = $currentGuess ? [...$guessedWords, $currentGuess] : $guessedWords;
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