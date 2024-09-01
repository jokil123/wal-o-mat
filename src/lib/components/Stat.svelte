<script lang="ts">
  export let name: string;
  export let score: number;
</script>

<div>
  <p class="text-2xl">{name}</p>
  <div class="flex items-stretch">
    <div class="relative w-full">
      <div
        class="bar absolute top-0 left-0 z-10 w-1/2 bg-[#848484] h-5 rounded-r-full"
      ></div>
    </div>
    <p>{score}</p>
  </div>
</div>

<style>
  .bar::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: -1; /* Ensures it is behind the .bar element */
  }
</style>
