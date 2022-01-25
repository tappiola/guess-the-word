<script>
    import { onMount, onDestroy } from 'svelte';
    import {currentGuess} from "./stores";

    const onKeyPress = (e) => {
        const code = e.keyCode;

        if (code >= 'a'.charCodeAt(0) && code < 'z'.charCodeAt(0) && $currentGuess.length < 5){
            $currentGuess = $currentGuess + e.key;
        }

        if (e.key === 'Enter'){
            document.getElementById('submitButton').click();
        }
    }

    onMount(() => {
        document.addEventListener('keypress', onKeyPress);
    })

    onDestroy(() => {
        document.removeEventListener('keypress', onKeyPress);
    })
</script>
