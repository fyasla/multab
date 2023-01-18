<script lang="ts">
    import Game from './Game.svelte';
	import GoalNumber from './GoalNumber.svelte';
	import Timer from './Timer.svelte';
</script>

<slot >
    <div class="flex h-100vh v-100vw items-center bg-base-200 flex-col">
        <Timer/>
        <div class="relative">
            <GoalNumber/>
            <Game />
        </div>
    </div>
</slot>
 