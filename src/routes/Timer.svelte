<script lang="ts">
    import { GameStatus, gameStatus } from '../store.js';

    let intervalId: NodeJS.Timer;
    let timer: number = 0;

    function startTimer() {
        if ($gameStatus === GameStatus.notStarted) {
            gameStatus.set(GameStatus.started);
            intervalId = setInterval(() => {
            timer += 1;
            }, 1000);
        }
    }

    function stopTimer(intervalId: NodeJS.Timer) {
        clearInterval(intervalId);
        if ($gameStatus === GameStatus.started) {
            gameStatus.set(GameStatus.notStarted);
        }
    }

</script>

<div>
    <button on:click={startTimer}>Start</button>
    <button on:click={() => stopTimer(intervalId)}>Stop</button>
</div>
<div class="radial-progress" style="--value:{(timer)};">{(timer)}</div>