<script>
    export let onGuessDelete;
</script>

<button id="deleteButton" on:click={onGuessDelete}>Delete</button>

<style>
    #deleteButton {
        background-color: dimgray;
        color: white;
        flex: 0 1 150px;
    }
</style>