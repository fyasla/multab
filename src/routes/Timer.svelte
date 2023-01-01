<script lang="ts">
    import { GameStatus, gameStatus } from '../store.js';

    let intervalId: NodeJS.Timer;
    let timer: number = 0;

    function startTimer() {
        if ($gameStatus === GameStatus.notStarted) {
            gameStatus.set(GameStatus.started);
            intervalId = setInterval(() => {
            timer += 1;
            }, 10);
        }
    }

    function stopTimer(intervalId: NodeJS.Timer) {
        clearInterval(intervalId);
        if ($gameStatus === GameStatus.started) {
            gameStatus.set(GameStatus.notStarted);
        }
    }

    let seconds = (timer / 100) % 60;

</script>

<div class="flex justify-center">
    <button class="btn" on:click={startTimer}>Start</button>
    <button class="btn" on:click={() => stopTimer(intervalId)}>Stop</button>
</div>
<div>{timer}</div>