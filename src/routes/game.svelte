<script lang="ts">
    import Square from './Square.svelte';
    import { products, currentIndex } from '../store.js';
    let start: number = 0;
    let end: number = 10;

    //function that returns an array of numbers from start to end using a for loop
    function range(range_start: number, range_end: number): number[] {
        let range_array: number[] = [];
        for (let i: number = range_start; i <= range_end; i++) {
            range_array.push(i);
        }
        return range_array;
    }
    let range_array: number[] = range(start, end);
</script>

<table class="mx-auto h-[70vh] w-[70vh]">
    {#each range_array as i}
    <tr class="">
        {#each range_array as j}
            <Square x={i} y={j}/>
        {/each}
    </tr>
    {/each}
</table>