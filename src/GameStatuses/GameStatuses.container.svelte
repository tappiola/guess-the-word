<script>
    import {GAME_STATUS} from "../constants";
    import {gameStatus, isAnimating} from "../stores";
    import GameStatuses from "./GameStatuses.component.svelte";

    let showWinModal = false;
    let showLoseModal = false;

    const displayDuration = 3000;

    $: if($gameStatus === GAME_STATUS.WON && !$isAnimating){
        showWinModal = true;
        setTimeout(() => showWinModal = false, displayDuration);
    }

    $: if($gameStatus === GAME_STATUS.LOST && !$isAnimating){
        showLoseModal = true;
        setTimeout(() => showLoseModal = false, displayDuration);
    }
</script>

<GameStatuses {showWinModal} {showLoseModal}/>
