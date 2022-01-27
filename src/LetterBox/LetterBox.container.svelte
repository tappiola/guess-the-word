<script>
    export let letter;
    export let index;
    export let isRevealed;
    export let isAnimated;

    export let isActiveRow = false;

    import {guessedWords, targetWord} from "../stores";
    import LetterBox from "./LetterBox.component.svelte";

    $: isColorAllowed = letter && isRevealed && !isActiveRow;
    $: hitLetters = $guessedWords.reduce((prev, next) => [...prev, ...next], []);

</script>

<LetterBox
    {letter}
    isLetterCorrect={isColorAllowed && $targetWord.includes(letter)}
    isLetterAndPositionCorrect={isColorAllowed && $targetWord[index] === letter}
    isLetterWrong={isColorAllowed && !$targetWord.includes(letter)}
    isRevealed={isAnimated}
/>