<script lang="ts">
  import Stat from "./Stat.svelte";

  export let rounds: number;
  export let pointsVector: whaleValue;
  export let whales: string[];
  console.log(whales);

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

<div>
  <h2 class="text-6xl text-center mt-20 font-semibold pb-16">
    Ihr Wal-O-Mat Ergebnis
  </h2>

  {#each sortedWhaleMap as whale}
    <Stat name={whale[0]} score={whale[1] / rounds}></Stat>
  {/each}
</div>
