<script>
    import { onMount, onDestroy } from 'svelte';
    import {currentGuess, gameStatus} from "./stores";
    import {GAME_STATUS} from "./constants";

    const onKeyPress = (e) => {
        if($gameStatus !== GAME_STATUS.IN_PROGRESS){
            return;
        }

        const code = e.keyCode;

        if (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0) && $currentGuess.length < 5){
            $currentGuess = $currentGuess + e.key;
        }

        if (e.key === 'Enter'){
            document.getElementById('submitButton').click();
        }

        if (e.key === 'Backspace'){
            document.getElementById('deleteButton').click();
        }
    }

    onMount(() => {
        document.addEventListener('keydown', onKeyPress);
    })

    onDestroy(() => {
        document.removeEventListener('keydown', onKeyPress);
    })
</script>
