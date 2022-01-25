<script>
    import { currentGuess, guessedWords} from "./stores";

    const onGameReset = () => {
        $currentGuess = '';
        $guessedWords = [];
    }
</script>

<button on:click={onGameReset}>New game</button>