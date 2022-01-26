<script>
    export let showModal;
    export let displayDuration = 6000;
    export let animationDuration = 2000;

    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';

    const opacity = tweened(0, {
        duration: animationDuration,
        easing: cubicOut
    });

    $: if (showModal) {
        opacity.set(1);
        setTimeout(() => opacity.set(0), displayDuration - animationDuration);
    } else {
        opacity.set(0);
    }
</script>

{#if (showModal)}
    <div class="modal" style="opacity: {$opacity}">
        <slot/>
    </div>
{/if}

<style>
    .modal {
        position: fixed;
        width: 300px;
        background-color: #333333;
        border-radius: 30px;
        top: 15%;
        color: #cccccc;
        padding: 10px 30px;
        font-size: 24px;
        left: 50%;
        transform: translateX(-50%);
    }
</style>