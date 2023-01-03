<script lang="ts">
    import { products, currentIndex } from '../store.js';
</script>


{#if $currentIndex < $products.length && $currentIndex >= 0}
    <div class="flex justify-center items-center text-35vw absolute inset-0 opacity-50 pointer-events-none">{$products[$currentIndex]}</div>
{:else if $currentIndex >= $products.length}
    <div class="flex justify-center items-center text-35vw absolute inset-0 opacity-50 pointer-events-none">You have reached the end of the list</div>
{:else}
    <div class="flex justify-center items-center text-35vw absolute inset-0 opacity-50 pointer-events-none">?</div>
{/if}
    