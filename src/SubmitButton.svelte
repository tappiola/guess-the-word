<script>
    import {attemptsCount, currentGuess, guessedWords, targetWord, wordLength, gameStatus, activeRow} from "./stores";
    import {GAME_STATUS} from "./constants";

    const onWordSubmit = () => {
        if ($currentGuess.length < $wordLength) {
            return;
        }

        if ($currentGuess === $targetWord){
            $gameStatus = GAME_STATUS.WON;
            alert('You won');
            return;
        }

        $guessedWords =  [...$guessedWords, $currentGuess];
        $currentGuess = '';

        if ($activeRow > $attemptsCount - 1){
            $gameStatus = GAME_STATUS.LOST;
            alert('You lost');
        }
    }
</script>

<button id="submitButton" on:click={onWordSubmit}>Submit</button>