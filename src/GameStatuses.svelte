<script>
    import {GAME_STATUS} from "./constants";
    import {gameStatus, isAnimating, targetWord} from "./stores";
    import Notification from "./Notification.svelte";

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

<main>
    <Notification showModal={showWinModal}>You won!!!</Notification>
    <Notification showModal={showLoseModal}>
        <p>You lost :(</p>
        <p>The correct word is { $targetWord.toUpperCase()}</p>
    </Notification>
</main>

<style>
</style>
