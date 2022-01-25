<script>
	import LetterBox from "./LetterBox.svelte";
	import { wordLength} from "./stores";

	export let word = '';
	export let isActiveRow = false;

</script>

<div class="word" class:active={isActiveRow}>
	{#each Array($wordLength) as letter, i}
		<LetterBox letter={word.split('')[i] || ''} index={i} isActiveRow={isActiveRow}/>
	{/each}
</div>

<style>
	.active {
		border: 3px solid mediumpurple;
		background-color: #666666;
	}
</style>
