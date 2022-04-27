<script>
	import {currentGuess, guessedWords} from "../stores";
	import Field from "./Field.component.svelte";

	$: setup = $currentGuess ? [...$guessedWords, $currentGuess] : $guessedWords;
</script>

<Field {setup}/>
