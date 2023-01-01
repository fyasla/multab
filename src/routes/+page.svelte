<script lang="ts">
    import BestTime from './BestTime.svelte';
    import Game from './Game.svelte';
	import GoalNumber from './GoalNumber.svelte';
	import Timer from './Timer.svelte';
</script>

<slot >
    <div class="flex bg-primary flex-col">
        <h1 class="hero">FREECH</h1>
        <div class="">
            <Timer/>
            <GoalNumber/>
        </div>
        <Game />
        <BestTime/>
    </div>
</slot>
 