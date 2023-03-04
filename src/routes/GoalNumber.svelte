<script lang="ts">
    import { products, currentIndex, timer } from '../store.js';
    let minutes: number, seconds: number, centiseconds: number;
    $: minutes = Math.floor(($timer / 1000) / 60);
    $: seconds = Math.floor(($timer / 1000) % 60);
    $: centiseconds = Math.floor((($timer / 1000) * 100) % 100);
</script>


{#if $currentIndex < $products.length && $currentIndex >= 0}
    <div class="z-30 flex justify-center items-center text-35vp absolute inset-0 opacity-50 pointer-events-none">{$products[$currentIndex]}</div>
{:else if $currentIndex >= $products.length}
    <div class="z-30 flex justify-center items-center text-35vp absolute inset-0 opacity-50 pointer-events-none">You have reached the end of the list</div>
{:else}
    <div class="z-30 flex justify-center items-center text-35vp absolute inset-0 opacity-50 pointer-events-none">?</div>
{/if}
    