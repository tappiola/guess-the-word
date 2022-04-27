<script>
    export let onWordSubmit;
</script>

<button id="submitButton" on:click={onWordSubmit}>Submit</button>

<style>
    #submitButton {
        background-color: mediumpurple;
        flex: 0 1 150px;
    }
</style>