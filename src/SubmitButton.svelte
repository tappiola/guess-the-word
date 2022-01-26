<script>
    import {attemptsCount, currentGuess, guessedWords, targetWord, wordLength, gameStatus, activeRow} from "./stores";
    import {GAME_STATUS} from "./constants";
    import {tick} from "svelte";

    const onWordSubmit = () => {
        if ($currentGuess.length < $wordLength) {
            return;
        }

        if ($currentGuess === $targetWord){
                $guessedWords = [...$guessedWords, $currentGuess];
                $currentGuess = '';
                tick().then(() => $gameStatus = GAME_STATUS.WON);
                return;
        }

        $guessedWords =  [...$guessedWords, $currentGuess];
        $currentGuess = '';

        if ($activeRow >= $attemptsCount){
            tick().then(() => $gameStatus = GAME_STATUS.LOST);
        }
    }
</script>

<button id="submitButton" on:click={onWordSubmit}>Submit</button>

<style>
    #submitButton {
        background-color: mediumpurple;
        width: 150px;
    }
</style>