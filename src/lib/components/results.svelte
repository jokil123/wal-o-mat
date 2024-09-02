<script lang="ts">
  import Stat from "./Stat.svelte";

  export let rounds: number;
  export let pointsVector: whaleValue;
  export let whales: string[];

  const whaleMap = new Map<string, number>();

  whales.forEach((key: string, i: number) => {
    whaleMap.set(key, pointsVector[i]);
  });

  const sortedWhaleMap = new Map(
    [...whaleMap.entries()].sort((a, b) => b[1] - a[1])
  );

  console.log(whaleMap);
  console.log(sortedWhaleMap);
</script>

<div class="max-w-screen-md flex flex-col mx-auto px-6 lg:px-0">
  <h2 class="text-3xl lg:text-6xl mt-10 font-semibold pb-8 max-w-screen-md">
    Ihr Wal-O-Mat Ergebnis
  </h2>

  {#each sortedWhaleMap as whale}
    <div class="w-full">
      <Stat name={whale[0]} score={whale[1] / rounds}></Stat>
    </div>
  {/each}
</div>
