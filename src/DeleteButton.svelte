<script>
    import { currentGuess} from "./stores";

    const onGuessDelete = () => {
        $currentGuess = $currentGuess.slice(0, -1);
    }
</script>

<button id="deleteButton" on:click={onGuessDelete}>Delete</button>

<style>
    #deleteButton {
        background-color: dimgray;
        color: white;
        width: 150px;
    }
</style>