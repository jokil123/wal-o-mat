<script lang="ts">
  import LandingBackground from "./LandingBackground.svelte";
  import { base } from "$app/paths";

  import logoWalOMat from "$lib/assets/wal-o-mat_logo.svg";
</script>

<LandingBackground />

<div
  class="text-black font-semibold mt-36 mx-8 md:mx-12 lg:mx-20 xl:mx-48 max-w-screen-2xl 2xl:mx-auto"
>
  <img src={logoWalOMat} alt="wal-o-mat logo" />
  <h1 class="text-3xl my-14">
    <a href="{base}/atlantis-2024">→ Atlantis 2024 - Start</a>
  </h1>
  <h2 class="text-2xl my-3"><a href="{base}/info">→ Wal-O-Mat Info</a></h2>
  <h2 class="text-2xl my-3">
    <a href="{base}/info">→ Wie entsteht der Wal-O-Mat</a>
  </h2>
  <h2 class="text-2xl my-3">
    <a href="{base}/info">→ Wie funktioniert der Wal-O-Mat</a>
  </h2>
</div>
