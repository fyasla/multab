<script lang="ts">
    import { GameStatus, gameStatus, currentIndex, timer, malusTime, products, shuffle } from '../store.js';
    let interval: NodeJS.Timer;
    let minutes: number, seconds: number, centiseconds: number;
    let startTime: number;
    $: minutes = Math.floor(($timer / 1000) / 60);
    $: seconds = Math.floor(($timer / 1000) % 60);
    $: centiseconds = Math.floor((($timer / 1000) * 100) % 100);

    $: if ($currentIndex === $products.length) gameWon();

    function gameWon() {
      clearInterval(interval);
      $gameStatus = GameStatus.won;
    }

    function start() {
      if ($gameStatus === GameStatus.notStarted) {
          $currentIndex = 0;
          $gameStatus = GameStatus.started;
          startTime = Date.now();
          interval = setInterval(() => {
            $timer = (Date.now() - startTime) + $malusTime;
          }, 10);
  }
  }
  
    function stop() {
      $gameStatus = GameStatus.notStarted;
      resetGame();
      clearInterval(interval);
    }
  
    function resetGame() {
      $timer = 0;
      $malusTime = 0;
      $currentIndex = -1;
      shuffle($products);
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
  