<script>
    import {currentGuess, gameStatus, guessedWords, isAnimating, targetWord, wordLength} from "./stores";
    import {getIsIndexCorrect} from "./helpers";
    import {GAME_STATUS} from "./constants";

    export let letter;
    export let index;

    const handleButtonClick = () => {
        if ($currentGuess.length >= $wordLength || $gameStatus !== GAME_STATUS.IN_PROGRESS || $isAnimating) {
            return;
        }

        $currentGuess = $currentGuess + letter;
    }

    $: revealedWords = $isAnimating ? $guessedWords.slice(0, -1) : $guessedWords;
    $: hitLetters = revealedWords.reduce((prev, next) => [...prev, ...next], []);

</script>

<button
        class="keyboard-key"
        class:yellow="{hitLetters.includes(letter) && $targetWord.includes(letter) && !getIsIndexCorrect($guessedWords, $targetWord, letter)}"
        class:green="{hitLetters.includes(letter) && getIsIndexCorrect($guessedWords, $targetWord, letter)}"
        class:gray="{hitLetters.includes(letter) && !$targetWord.includes(letter)}"
        on:click={handleButtonClick}>{letter}
</button>

<style>
    .keyboard-key {
        cursor: pointer;
        margin: 4px;
        font-size: 24px;
        line-height: 32px;
        border-radius: 3px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 12px 0;
        width: 46px;
        text-transform: uppercase;
    }

    @media (max-width: 568px) {
        .keyboard-key {
            padding: 8px 0;
            width: 30px;
            max-width: 7vw;
        }
    }

    .green {
        background-color: var(--green);
    }

    .yellow {
        background-color: var(--yellow);
    }

    .gray {
        background-color: gray;
        pointer-events: none;
    }
</style>
