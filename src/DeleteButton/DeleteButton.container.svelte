<script>
    import { currentGuess} from "../stores";
    import DeleteButton from "./DeleteButton.component.svelte";

    const onGuessDelete = () => {
        $currentGuess = $currentGuess.slice(0, -1);
    }
</script>

<DeleteButton {onGuessDelete}/>