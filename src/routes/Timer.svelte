<script lang="ts">
    //create a timer
    let timer: number = 0;
    //uspdate the timer every second
    setInterval(() => {
        timer++;
    }, 1000);
</script>

<div class="flex-1 justify-center grid grid-flow-col gap-5 text-center auto-cols-max">
    <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span class="countdown font-mono text-5xl">
        <span style="--value:{timer};"></span>
        </span>
        min
    </div> 
    <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span class="countdown font-mono text-5xl">
        <span style="--value:{timer};"></span>
        </span>
        sec
    </div>
</div>