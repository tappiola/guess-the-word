<script>
    import {currentGuess, guessedWords, targetWord, wordLength} from "./stores";

    export let letter;

    const handleButtonClick = () => {
        if ($currentGuess.length >= $wordLength) {
            return;
        }

        $currentGuess = $currentGuess + letter;
    }

    $: hitLetters = $guessedWords.reduce((prev, next) => [...prev, ...next], []);
</script>

<button
        class="keyboard-key"
        class:yellow="{hitLetters.includes(letter) && $targetWord.includes(letter)}"
        class:gray="{hitLetters.includes(letter) && !$targetWord.includes(letter)}"
        on:click={handleButtonClick}>{letter}</button>

<style>
    .keyboard-key {
        cursor: pointer;
        margin: 4px;
        width: 30px;
        font-size: 24px;
        line-height: 32px;
        border-radius: 3px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    .green {
        background-color: #729435;
    }

    .yellow {
        background-color: yellow;
    }

    .gray {
        background-color: gray;
    }
</style>
