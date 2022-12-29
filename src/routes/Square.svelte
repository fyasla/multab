<svelte:options accessors={true}/>

<script lang="ts">
	import { onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';
    import { products, currentIndex, lastSquareClicked } from '../store.js';

	export let x :number;
    export let y: number;
    let isVisible: boolean = ((x * y) === 0);

    const unsubscribe = lastSquareClicked.subscribe((value) => {
        if (value.x === y && value.y === x) {
            isVisible = true;
        }
    });
    
    function handleClick() {
        if (x === 0 || y === 0) {
            return;
        }
        if($products[$currentIndex] === (x * y)) {
            lastSquareClicked.set({x, y});
            isVisible = true;
            $currentIndex += 1;
        }
    }

    onDestroy(() => {
        unsubscribe();
    });
</script>

{#if isVisible}
    <div transition:fade class="">
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
{:else}
    <div on:click={handleClick} class="">O</div>
{/if}