<script>

    import {targetWord} from "../stores";
    import Notification from "../Notification.svelte";

    let showWinModal = false;
    let showLoseModal = false;
</script>

<main>
    <Notification showModal={showWinModal}>You won!!!</Notification>
    <Notification showModal={showLoseModal}>
        <p>You lost :(</p>
        <p>The correct word is { $targetWord.toUpperCase()}</p>
    </Notification>
</main>
