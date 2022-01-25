<script>
	import LetterBox from "./LetterBox.svelte";
	import {isAnimating, wordLength} from "./stores";

	export let word = '';
	export let isActiveRow = false;
	export let isRevealed = false;

	let openCount = 0;
	let intervalId;

	$: if(isRevealed && openCount === 0){
		$isAnimating = true;
		intervalId = setInterval(() => openCount += 1, 500);
	}

	$: console.log(openCount);

	$: if(openCount > 6)
	{
		clearInterval(intervalId);
		$isAnimating = false;
	}

</script>

<div class="word" class:active={isActiveRow}>
	{#each Array($wordLength) as letter, i}
		<LetterBox
				letter={word.split('')[i] || ''}
				index={i} isActiveRow={isActiveRow}
				isAnimated={openCount > i}
				isRevealed={openCount > i + 1}/>
	{/each}
</div>

<style>
	.active {
		border: 5px solid mediumpurple;
		background-color: #666666;
		display: flex;
	}
</style>
