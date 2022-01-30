<script>
    export let letter;
    export let handleButtonClick;
    export let isLetterCorrect;
    export let isLetterAndPositionCorrect;
    export let isLetterWrong;
</script>

<button
        class="keyboard-key"
        class:yellow={isLetterCorrect}
        class:green={isLetterAndPositionCorrect}
        class:gray={isLetterWrong}
        on:click={handleButtonClick}>
    {letter}
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
