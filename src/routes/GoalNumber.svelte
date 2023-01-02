<script lang="ts">
    import { products, currentIndex } from '../store.js';
</script>

<div class="flex flex-1 justify-center align-center">{$products[$currentIndex]}</div>