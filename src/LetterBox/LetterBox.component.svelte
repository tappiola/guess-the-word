<script>
    export let isLetterCorrect;
    export let isLetterAndPositionCorrect;
    export let isLetterWrong;
    export let isRevealed;
    export let letter;
</script>

<div
        class="letter"
        class:yellow={isLetterCorrect}
        class:green={isLetterAndPositionCorrect}
        class:gray={isLetterWrong}
        class:revealed={isRevealed}
>{letter}</div>

<style>
    .letter {
        display: inline-flex;
        border: 3px solid gray;
        font-size: 32px;
        font-weight: 500;
        line-height: 32px;
        margin: 8px;
        width: 52px;
        aspect-ratio: 1;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        background-color: #cccccc;
    }

    .revealed {
        animation-name: Flip;
        animation-duration: 700ms;
        animation-timing-function: ease-in;
    }

    @media (max-width: 568px) {
        .letter {
            width: 40px;
        }
    }

    @keyframes Flip {
        0% {
            transform: rotateX(0);
        }
        50% {
            transform: rotateX(90deg);
        }
        100% {
            transform: rotateX(0);
        }
    }

    .yellow {
        background-color: var(--yellow);
    }

    .green {
        background-color: var(--green);
    }

    .gray {
        background-color: gray;
    }
</style>