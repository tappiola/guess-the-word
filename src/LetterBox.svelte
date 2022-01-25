<script>
    import {GAME_STATUS} from "./constants";

    export let letter;
    export let index;

    export let isActiveRow = false;

    import {gameStatus, guessedWords, targetWord} from "./stores";

    // $: isColorAllowed = !isActiveRow || $gameStatus === GAME_STATUS.WON;
    $: hitLetters = $guessedWords.reduce((prev, next) => [...prev, ...next], []);

</script>

<div
        class="letter"
        class:yellow="{letter && hitLetters.includes(letter) && $targetWord.includes(letter)}"
        class:green="{hitLetters.includes(letter) && $targetWord[index] === letter}"
        class:gray="{hitLetters.includes(letter) && !$targetWord.includes(letter)}"
>{letter}</div>

<style>
    .letter {
        display: inline-flex;
        border: 3px solid gray;
        font-size: 32px;
        font-weight: 500;
        line-height: 32px;
        margin: 8px;
        width: 52px;
        height: 52px;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        background-color: #cccccc;
    }

    .yellow {
        background-color: #cea727;
    }

    .green {
        background-color: #729435;
    }

    .gray {
        background-color: gray;
    }
</style>