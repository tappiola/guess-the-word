<script>
    import {attemptsCount, currentGuess, guessedWords, targetWord, wordLength, gameStatus, activeRow} from "./stores";
    import {GAME_STATUS} from "./constants";

    const onWordSubmit = () => {
        if ($currentGuess.length < $wordLength) {
            return;
        }

        if ($currentGuess === $targetWord){
                $guessedWords = [...$guessedWords, $currentGuess];
                $currentGuess = '';
                setTimeout(() => $gameStatus = GAME_STATUS.WON, 0);
                return;
        }

        $guessedWords =  [...$guessedWords, $currentGuess];
        $currentGuess = '';

        if ($activeRow >= $attemptsCount){
            setTimeout(() => $gameStatus = GAME_STATUS.LOST, 0);
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