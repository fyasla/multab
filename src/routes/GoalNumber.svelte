<script lang="ts">
    import { products, currentIndex } from '../store.js';
</script>


{#if $currentIndex < $products.length && $currentIndex >= 0}
    <div class="flex flex-1 justify-center align-center">{$products[$currentIndex]}</div>
{:else if $currentIndex >= $products.length}
    <div class="flex flex-1 justify-center align-center">You have reached the end of the list</div>
{:else}
    <div class="flex flex-1 justify-center align-center">?</div>
{/if}
    