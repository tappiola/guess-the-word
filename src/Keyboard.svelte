<script>
    import KeyboardLetter from "./KeyboardLetter.svelte";
    import {letterRows} from "./constants";

</script>

<div class="keyboard">
    {#each letterRows as row}
        <div class="keyboard-row">
            {#each row.split('') as letter}
                <KeyboardLetter {letter}/>
            {/each}
        </div>
    {/each}
</div>

<style>
    .keyboard {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .keyboard-row {
        text-align: center;
    }
</style>
