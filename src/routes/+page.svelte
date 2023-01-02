<script lang="ts">
    import BestTime from './BestTime.svelte';
    import Game from './Game.svelte';
	import GoalNumber from './GoalNumber.svelte';
	import Timer from './Timer.svelte';
</script>

<slot >
    <div class="flex h-100vh v-100vw items-center bg-base-200 flex-col">
        <h1 class="hero">FREECH</h1>
        <div class="">
            <Timer/>
            <GoalNumber/>
        </div>
        <Game />
        <BestTime/>
    </div>
</slot>
 