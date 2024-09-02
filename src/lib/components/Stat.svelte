<script lang="ts">
  export let name: string;
  export let score: number;
</script>

<div class="mx-auto w-full mb-6">
  <p class="text-2xl lg:text-3xl font-semibold pb-3">{name}</p>
  <div class="flex items-stretch align-bottom">
    <div
      class="relative w-full bar-wrapper after:h-3 after:w-full lg:after:h-5"
    >
      <div
        class="bar absolute top-0 bottom-0 left-0 z-10 bg-[#808080] h-3 lg:h-5 rounded-r-full"
        style="width: {score * 100}%;"
      ></div>
    </div>
    <p class="text-lg lg:text-4xl font-semibold pl-5 lg:pl-10 self-start m-0">
      {(score * 100).toFixed(1).replace(".", ",")}%
    </p>
  </div>
</div>

<style>
  .bar-wrapper::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
    z-index: -1;
    top: 0.5rem;
  }

  .bar-wrapper {
    position: relative;
    align-self: baseline; /* Ensure the parent container is positioned relative */
  }
</style>
