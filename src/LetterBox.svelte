<script>
    export let letter;
    export let index;
    export let isRevealed;
    export let isAnimated;

    export let isActiveRow = false;

    import {guessedWords, targetWord} from "./stores";

    $: isColorAllowed = letter && isRevealed && !isActiveRow;
    $: hitLetters = $guessedWords.reduce((prev, next) => [...prev, ...next], []);

</script>

<div
        class="letter"
        class:yellow="{isColorAllowed && $targetWord.includes(letter)}"
        class:green="{isColorAllowed && $targetWord[index] === letter}"
        class:gray="{isColorAllowed && !$targetWord.includes(letter)}"
        class:revealed="{isAnimated}"
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