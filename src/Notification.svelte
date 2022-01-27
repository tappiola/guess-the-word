<script>
    export let showModal;

    import {fade, fly} from 'svelte/transition';
    import {cubicOut} from 'svelte/easing';
</script>

{#if (showModal)}
    <div class="modal" in:fly={{y:-300, duration: 1000, easing: cubicOut}} out:fade={{duration: 1000} }>
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