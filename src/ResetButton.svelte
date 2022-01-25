<script>
    import { currentGuess, guessedWords} from "./stores";

    const onGameReset = () => {
        $currentGuess = '';
        $guessedWords = [];
    }
</script>

<button id="resetButton" on:click={onGameReset}>New game</button>

<style>
    #resetButton {
        width: 150px;
    }
</style>
