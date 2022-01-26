<script>
    export let showModal;
</script>

{#if (showModal)}
    <div class="modal">
        <slot/>
    </div>
{/if}

<style>
    .modal {
        position: fixed;
        width: 300px;
        background-color: #333333;
        border-radius: 30px;
        top: 30px;
        color: #cccccc;
        padding: 10px 30px;
        font-size: 24px;
    }
</style>