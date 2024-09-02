<script lang="ts">
  // this was a mess, to see why read this:
  // https://github.com/vitejs/vite/issues/15986

  import bg from "$lib/assets/landingBackground.svg?url";
</script>

<div
  style="background: linear-gradient(#ffab0e, #ffca11) fixed;"
  class="absolute top-0 -z-50"
>
  <div
    style={`background-image: url("${bg}"); background-size: 100% auto;`}
    class="bg-no-repeat min-h-svh w-dvw"
  ></div>
</div>
