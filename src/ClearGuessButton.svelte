<script>
    import { currentGuess} from "./stores";

    const onGuessDelete = () => {
        $currentGuess = $currentGuess.slice(0, -1);
    }
</script>

<button on:click={onGuessDelete}>Delete</button>

<style>
    button {
        background-color: dimgray;
        color: white;
    }
</style>