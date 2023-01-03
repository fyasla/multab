<svelte:options accessors={true}/>

<script lang="ts">
	import { onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';
    import { products, currentIndex, lastSquareClicked, hoveredSquare } from '../store.js';

	export let x :number;
    export let y: number;
    let isVisible: boolean = ((x * y) === 0);

    let isSquareHovered: boolean, isColumnHovered: boolean, isRowHovered: boolean;
    $: isSquareHovered = $hoveredSquare.x === x && $hoveredSquare.y === y;
    $: isColumnHovered = $hoveredSquare.y === y && y !== 0;
    $: isRowHovered = $hoveredSquare.x === x && x !== 0;
    $: isSecondaryHovered = isColumnHovered || isRowHovered;

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
            $lastSquareClicked = {x, y};
            isVisible = true;
            $currentIndex += 1;
        }
    }

    function updateHoveredSquare() {
        console.log("hovered square" + x + " " + y);
        $hoveredSquare = {x, y};
    }

    onDestroy(() => {
        unsubscribe();
    });
</script>

{#if x === 0 && y === 0}
    <th class="w-1/11 h-1/11 text-center bg-neutral neutral-content" on:mouseenter={updateHoveredSquare}>X</th>
{:else if x === 0}
    <th class="w-1/11 h-1/11 text-center bg-neutral neutral-content" on:mouseenter={updateHoveredSquare} class:bg-neutral-focus={isSquareHovered || isSecondaryHovered}>{y}</th>
{:else if y === 0}
    <th class="w-1/11 h-1/11 text-center bg-neutral neutral-content" on:mouseenter={updateHoveredSquare} class:bg-neutral-focus={isSquareHovered || isSecondaryHovered}>{x}</th>
{:else}
    {#if isVisible}    
    <td transition:fade class="w-1/11 h-1/11 text-center bg-success success-content" on:mouseenter={updateHoveredSquare}>
        {x * y}
    </td>
    {:else}
    <td on:click={handleClick} class="w-1/11 h-1/11 text-center info-content" on:mouseenter={updateHoveredSquare} class:bg-info={!isSquareHovered && !isSecondaryHovered} 
    class:bg-warning={isSquareHovered || isSecondaryHovered} class:warning-content={isSquareHovered || isSecondaryHovered}>
        O
    </td>
    {/if}
{/if}
