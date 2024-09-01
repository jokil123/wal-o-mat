<script lang="ts">
  import Stat from "./Stat.svelte";

  export let rounds: number;
  export let pointsVector: whaleValue;
</script>

<div>
  <h2 class="text-6xl text-center mt-20 font-semibold pb-16">
    Ihr Wal-O-Mat Ergebnis
  </h2>

  {#each pointsVector as point}
    <Stat name="Cumwhale" score={point / rounds}></Stat>
  {/each}
</div>
