<script lang="ts">
    import { GameStatus, gameStatus } from '../store.js';
    let elapsedTime: number;
    $: elapsedTime = 0;
    let interval: NodeJS.Timer;
    let minutes: number, seconds: number, centiseconds: number;
    $: minutes = Math.floor(elapsedTime / 60);
    $: seconds = Math.floor(elapsedTime % 60);
    $: centiseconds = Math.floor((elapsedTime * 100) % 100);
  
    function start() {
        if ($gameStatus === GameStatus.notStarted) {
            $gameStatus = GameStatus.started;
            interval = setInterval(() => {
            elapsedTime += 0.01;
            }, 10);
        }
    }
  
    function stop() {
      clearInterval(interval);
      if ($gameStatus === GameStatus.started) {
            $gameStatus = GameStatus.notStarted;
        }
    }
  
    function reset() {
      elapsedTime = 0;
    }
  </script>
  
  <button class="btn" on:click={start}>Start</button>
  <button class="btn" on:click={stop}>Stop</button>
  <button class="btn" on:click={reset}>Reset</button>
  
  <p>Elapsed Time: {minutes}:{seconds}.{centiseconds}</p>
  