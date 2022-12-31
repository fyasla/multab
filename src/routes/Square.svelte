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

{#if x === 0 && y === 0}
<td>X</td>
{:else if x === 0}
<th>{y}</th>
{:else if y === 0}
<th>{x}</th>
{:else}
    {#if isVisible}    
    <td transition:fade class="bg-success success-content">
        {x * y}
    </td>
    {:else}
    <td on:click={handleClick} class="bg-neutral neutral-content">
        O
    </td>
    {/if}
{/if}