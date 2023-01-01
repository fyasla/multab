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
    $: isColumnHovered = $hoveredSquare.y === y;
    $: isRowHovered = $hoveredSquare.x === x;

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
    <td class="text-center bg-success success-content" on:mouseenter={updateHoveredSquare} class:bg-primary-focus={isSquareHovered} class:bg-secondary-focus={isColumnHovered || isRowHovered}>X</td>
{:else if x === 0}
    <th class="text-center bg-success success-content" on:mouseenter={updateHoveredSquare} class:bg-primary-focus={isSquareHovered} class:bg-secondary-focus={isColumnHovered || isRowHovered}>{y}</th>
{:else if y === 0}
    <th class="text-center bg-success success-content" on:mouseenter={updateHoveredSquare} class:bg-primary-focus={isSquareHovered} class:bg-secondary-focus={isColumnHovered || isRowHovered}>{x}</th>
{:else}
    {#if isVisible}    
    <td transition:fade class="text-center bg-success success-content" on:mouseenter={updateHoveredSquare} class:bg-primary-focus={isSquareHovered} class:bg-secondary-focus={isColumnHovered || isRowHovered}>
        {x * y}
    </td>
    {:else}
    <td on:click={handleClick} class="text-center bg-neutral neutral-content" on:mouseenter={updateHoveredSquare} class:bg-primary-focus={isSquareHovered} class:bg-secondary-focus={isColumnHovered || isRowHovered}>
        O
    </td>
    {/if}
{/if}
