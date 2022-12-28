<svelte:options accessors={true}/>

<script lang="ts">
	import { onDestroy } from 'svelte';
    import { products, currentIndex, lastSquareClicked } from '../store.js';

	export let x :number;
    export let y: number;
    let isSwapActive: boolean = ((x * y) === 0);

    const unsubscribe = lastSquareClicked.subscribe((value) => {
        if (value.x === y && value.y === x) {
            isSwapActive = !isSwapActive;
        }
    });
    
    function handleClick() {
        if (x === 0 || y === 0) {
            return;
        }
        if($products[$currentIndex] === (x * y)) {
            lastSquareClicked.set({x, y});
            isSwapActive = !isSwapActive;
            $currentIndex += 1;
        }
    }

    onDestroy(() => {
        unsubscribe();
    });
</script>

<label on:click={handleClick} class="swap swap-flip" class:swap-active="{isSwapActive}">
    <div class="swap-on bg-success">
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
    <div class="swap-off bg-neutral">O</div>
</label>