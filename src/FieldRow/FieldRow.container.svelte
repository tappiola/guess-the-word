<script>
	import {isAnimating, targetWord} from "../stores";
	import FieldRow from "./FieldRow.component.svelte";

	export let word = '';
	export let isActiveRow = false;
	export let isRevealed = false;

	let openCount = 0;
	let intervalId;

	$: if(isRevealed && openCount === 0){
		$isAnimating = true;
		intervalId = setInterval(() => openCount += 1, 500);
	}

	$: if(openCount > 6)
	{
		clearInterval(intervalId);
		$isAnimating = false;
	}

	$: $targetWord, openCount = 0;

</script>

<FieldRow {word} {isActiveRow} {openCount}/>
