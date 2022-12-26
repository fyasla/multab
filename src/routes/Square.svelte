<script lang="ts">
	export let x :number;
    export let y: number;
    let isC: boolean = false;
    function handleClick() {
        isC = !isC;
    }
</script>

<label class="swap swap-flip">
    
    <!-- this hidden checkbox controls the state -->
    <input type="checkbox" />
    
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
  </label>

  <div on:click={handleClick} class="swap swap-flip" class:swap-active="{isC}">
    <div class="swap-on">🥵</div>
    <div class="swap-off">🥶</div>
  </div>