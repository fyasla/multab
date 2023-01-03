<script lang="ts">
    import { GameStatus, gameStatus, currentIndex } from '../store.js';
    let elapsedTime: number;
    $: elapsedTime = 0;
    let interval: NodeJS.Timer;
    let minutes: number, seconds: number, centiseconds: number;
    $: minutes = Math.floor(elapsedTime / 60);
    $: seconds = Math.floor(elapsedTime % 60);
    $: centiseconds = Math.floor((elapsedTime * 100) % 100);
  
    function start() {
        if ($gameStatus === GameStatus.notStarted) {
          $currentIndex = 0;
            $gameStatus = GameStatus.started;
            interval = setInterval(() => {
            elapsedTime += 0.01;
            }, 10);
        }
    }
  
    function stop() {
      clearInterval(interval);
      if ($gameStatus === GameStatus.started) {
            reset();
            $gameStatus = GameStatus.notStarted;
        }
    }
  
    function reset() {
      elapsedTime = 0;
    }
  </script>
  
  <div>
    {#if $gameStatus === GameStatus.notStarted}
      <button class="btn" on:click={start}>Start</button>
    {:else if $gameStatus === GameStatus.started}
      <button class="btn" on:click={stop}>Give Up</button>
    {/if}
    
    <p class="text-center">{minutes}:{seconds}.{centiseconds}</p>
  </div>
  