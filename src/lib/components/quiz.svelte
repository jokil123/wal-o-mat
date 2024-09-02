<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { fly } from "svelte/transition";

  export let questionNr: number;
  export let questionNrMax: number;
  export let question: string;
  export let answer: "agree" | "neutral" | "disagree" | undefined;

  const dispatch = createEventDispatcher();

  function handleClick(buttonName: any) {
    dispatch("buttonclick", { button: buttonName });
  }
</script>

{#key questionNr}
  <div
    class="border-2 lg:w-10/12 lg:mx-auto py-3 px-10 bg-black"
    in:fly={{ x: 200, delay: 300, duration: 300 }}
    out:fly={{ x: -200, duration: 300 }}
  >
    <p class="font-semibold text-lg lg:text-2xl lg:pb-8 pt-3">
      Frage {questionNr}/{questionNrMax}
    </p>

    <p class="text-xl lg:text-4xl pt-2">
      {question}
    </p>
    <div
      class="pb-8 pt-5 lg:pt-16 font-semibold flex flex-col lg:flex-row w-4/6 lg:w-10/12 mx-auto lg:mx-0 text-lg"
    >
      <button
        on:click={() => {
          answer = "agree";
          handleClick("agree");
        }}
        class="border-2 w-full lg:w-1/3 mb-3 lg:mb-0 py-1 lg:mr-3 hover:bg-white hover:text-black hover:border-black transition-colors ease-in duration-200 mr-2"
        >stimme zu</button
      >
      <button
        on:click={() => {
          answer = "neutral";
          handleClick("neutral");
        }}
        class="border-2 w-full lg:w-1/3 mb-3 lg:mb-0 py-1 lg:mr-3 hover:bg-white hover:text-black hover:border-black transition-colors ease-in duration-200 mr-2"
        >neutral</button
      >
      <button
        on:click={() => {
          answer = "disagree";
          handleClick("disagree");
        }}
        class="border-2 w-full lg:w-1/3 mb-3 lg:mb-0 py-1 lg:mr-3 hover:bg-white hover:text-black hover:border-black transition-colors ease-in duration-200"
        >stimme nicht zu</button
      >
    </div>
  </div>
{/key}
