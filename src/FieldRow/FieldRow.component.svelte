<script>
	import LetterBox from "../LetterBox";
	import { wordLength} from "../stores";

	export let word = '';
	export let isActiveRow = false;
	export let openCount = 0;

</script>

<div class="word" class:active={isActiveRow}>
	{#each Array($wordLength) as letter, i}
		<LetterBox
				letter={word.split('')[i] || ''}
				index={i}
				isActiveRow={isActiveRow}
				isAnimated={openCount > i}
				isRevealed={openCount > i + 1}/>
	{/each}
</div>

<style>
	.word {
		width: 100%;
		max-width: 370px;
		display: flex;
	}

	.active {
		border: 5px solid mediumpurple;
		background-color: #666666;
	}
</style>
