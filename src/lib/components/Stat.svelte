<script lang="ts">
  export let name: string;
  export let score: number;
</script>

<div class="mx-auto max-w-screen-lg mb-16">
  <p class="text-4xl font-semibold pb-3">{name}</p>
  <div class="flex items-stretch align-bottom">
    <div class="relative w-full bar-wrapper">
      <div
        class="bar absolute top-0 bottom-0 left-0 z-10 bg-[#848484] h-7 rounded-r-full"
        style="width: {score * 100}%;"
      ></div>
    </div>
    <p class="text-5xl font-semibold pl-10 self-start m-0">
      {score * 100}%
    </p>
  </div>
</div>

<style>
  .bar-wrapper::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1.75rem;
    background-color: white;
    z-index: -1;
    top: 0.5rem;
  }

  .bar-wrapper {
    position: relative;
    align-self: baseline; /* Ensure the parent container is positioned relative */
  }
</style>
