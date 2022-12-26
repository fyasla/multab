<script lang="ts">
	export let x :number;
    export let y: number;
    
    let isC: boolean = ((x * y) === 0);
    function handleClick() {
        if (x === 0 || y === 0) {
            return;
        }
        isC = !isC;
    }
</script>





<div on:click={handleClick} class="swap swap-flip" class:swap-active="{isC}">
    <div class="swap-on">
        {#if x === 0 && y === 0}
            X
        {:else if x === 0}
            {y}
        {:else if y === 0}
            {x}
        {:else}
            {x * y}
        {/if}
    </div>
    <div class="swap-off">O</div>
</div>