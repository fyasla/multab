<script>
    import Game from './game.svelte';
</script>

<slot>
    <svelte:component this={Game} />
</slot>
 