<script>
    import {currentGuess, gameStatus, guessedWords, isAnimating, targetWord} from "../stores";
    import {GAME_STATUS} from "../constants";
    import {getRandomItem} from "../helpers";
    import {KEYWORDS} from "../keywords";
    import ResetButton from "./ResetButton.component.svelte";

    const onGameReset = () => {
        $currentGuess = '';
        $guessedWords = [];
        $gameStatus = GAME_STATUS.IN_PROGRESS;
        $targetWord = getRandomItem(KEYWORDS);
        $isAnimating = false;
    }
</script>

<ResetButton on:click={onGameReset}/>