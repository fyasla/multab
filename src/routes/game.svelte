<script lang="ts">
    import Square from './Square.svelte';
    //function that returns an array of numbers from start to end using a for loop
    function range(start: number, end: number): number[] {
        let range_array: number[] = [];
        for (let i: number = start; i <= end; i++) {
            range_array.push(i);
        }
        return range_array;
    }

    let range_array: number[] = range(0, 10);

</script>

<div id="main-grid" class="grid grid-cols-11 gap-4">
    <!-- make 10 rows of 10 squares with svelte each statement-->
    {#each range_array as i}
        {#each range_array as j}
           <Square x={i} y={j}/>
        {/each}
    {/each}
</div>
