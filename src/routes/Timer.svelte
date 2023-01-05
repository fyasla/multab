<script lang="ts">
    import { GameStatus, gameStatus, currentIndex } from '../store.js';
    let elapsedTime: number;
    $: elapsedTime = 0;
    let interval: NodeJS.Timer;
    let minutes: number, seconds: number, centiseconds: number;
    let startTime: number;
    $: minutes = Math.floor((elapsedTime / 1000) / 60);
    $: seconds = Math.floor((elapsedTime / 1000) % 60);
    $: centiseconds = Math.floor(((elapsedTime / 1000) * 100) % 100);

    function start() {
      if ($gameStatus === GameStatus.notStarted) {
          $currentIndex = 0;
          $gameStatus = GameStatus.started;
    startTime = Date.now();
    interval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
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
    <div class="radial-progress text-primary text-center" style="--value:{(seconds % 60 + centiseconds / 100) * (100 / 60)};">
      {minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}.{centiseconds < 10 ? '0' + centiseconds : centiseconds}
    </div>
  
  </div>
  