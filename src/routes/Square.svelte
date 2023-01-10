<svelte:options accessors={true}/>

<script lang="ts">
	import { onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';
    import { products, currentIndex, lastSquareClicked, hoveredSquare, malusTime, gameStatus, GameStatus } from '../store.js';

	export let x :number;
    export let y: number;
    let isVisible: boolean = ((x * y) === 0);

    let isSquareHovered: boolean, isColumnHovered: boolean, isRowHovered: boolean, isWrong: boolean;
    $: isSquareHovered = $hoveredSquare.x === x && $hoveredSquare.y === y;
    $: isColumnHovered = $hoveredSquare.y === y && y !== 0;
    $: isRowHovered = $hoveredSquare.x === x && x !== 0;
    $: isSecondaryHovered = isColumnHovered || isRowHovered;
    $: isWrong = false;

    const unsubscribe = lastSquareClicked.subscribe((value) => {
        if (value.x === y && value.y === x) {
            checkAnswer(x, y, true);
        }
    });

    function checkAnswer(x_ans: number, y_ans: number, lastCheck:boolean = false) {
        console.log(x + " " + y);
        if (x_ans === 0 || y_ans === 0) {
            return;
        }    
        if($products[$currentIndex] === (x_ans * y_ans)) {
            isVisible = true;
            if (lastCheck) $currentIndex += 1;;
        }
        else {
            isWrong = true;
            if (lastCheck) $malusTime += 2000; 
            setTimeout(() => {
                isWrong = false;
            }, 1000);
        }
    }
    
    function handleClick() {
        if ($gameStatus === GameStatus.started) {
            checkAnswer(x,  y);
            $lastSquareClicked = {x, y};
        }
    }

    function updateHoveredSquare() {
        $hoveredSquare = {x, y};
    }

    $: if ($gameStatus === GameStatus.notStarted && isVisible) {
        isVisible = false;
    }

    onDestroy(() => {
        unsubscribe();
    });
</script>

{#if x === 0 && y === 0}
    <th class="flex flex-1 justify-center items-center bg-neutral neutral-content aspect-square" on:mouseenter={updateHoveredSquare}>X</th>
{:else if x === 0}
    <th class="flex flex-1 justify-center items-center bg-neutral neutral-content aspect-square" on:mouseenter={updateHoveredSquare} class:bg-neutral-focus={isSquareHovered || isSecondaryHovered}>{y}</th>
{:else if y === 0}
    <th class="flex flex-1 justify-center items-center bg-neutral neutral-content aspect-square" on:mouseenter={updateHoveredSquare} class:bg-neutral-focus={isSquareHovered || isSecondaryHovered}>{x}</th>
{:else}
    {#if isVisible}    
    <td in:fade class="flex flex-1 justify-center items-center bg-success success-content aspect-square" on:mouseenter={updateHoveredSquare}>
        {x * y}
    </td>
    {:else}
    <td on:click={handleClick} class="flex flex-1 justify-center items-center info-content aspect-square" on:mouseenter={updateHoveredSquare} class:bg-info={!isWrong && !isSquareHovered && !isSecondaryHovered} 
    class:bg-warning={(isSquareHovered || isSecondaryHovered) && !isWrong} class:warning-content={isSquareHovered || isSecondaryHovered} class:bg-error={isWrong}>
        O
    </td>
    {/if}
{/if}
