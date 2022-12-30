<script lang="ts">
    import BestTime from './BestTime.svelte';
import Game from './Game.svelte';
	import GoalNumber from './GoalNumber.svelte';
	import PlayButton from './PlayButton.svelte';
	import Timer from './Timer.svelte';
</script>

<slot >
    <div class="flex flex-col h-screen bg-primary">
        <h1 class="hero">FREECH</h1>
        <div class="flex flex-row justify-center">
            <Timer/>
            <GoalNumber/>
        </div>
        <div class="flex justify-center flex-1">
            <Game />
        </div>
        <div class="flex flex-row">
            <BestTime/>
        </div>
    </div>
</slot>
 