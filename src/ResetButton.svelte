<script>
    import {currentGuess, gameStatus, guessedWords, targetWord} from "./stores";
    import {GAME_STATUS} from "./constants";
    import {getRandomItem} from "./helpers";
    import {KEYWORDS} from "./keywords";

    const onGameReset = () => {
        $currentGuess = '';
        $guessedWords = [];
        $gameStatus = GAME_STATUS.IN_PROGRESS;
        $targetWord = getRandomItem(KEYWORDS);
    }
</script>

<button id="resetButton" on:click={onGameReset}>New game</button>

<style>
    #resetButton {
        width: 150px;
    }
</style>
