<script lang="ts">
	export let x :number;
    export let y: number;
</script>

<div>
    {#if x == 0 && y==0}
        X
    {:else if x == 0}
        {y}
    {:else if y == 0}
        {x}
    {:else}
        {x * y}
    {/if}
</div>