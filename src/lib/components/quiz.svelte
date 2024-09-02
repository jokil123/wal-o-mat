<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function handleClick(buttonName: any) {
    dispatch("buttonclick", { button: buttonName });
  }

  export let questionNr: number;
  export let questionNrMax: number;
  export let question: string;
  export let answer: "agree" | "neutral" | "disagree" | undefined;
</script>

<div class="border w-full px-10">
  <p class="font-semibold text-xl pt-8">Frage {questionNr}/{questionNrMax}</p>

  <p class="text-4xl pt-8">
    {question}
  </p>
  <div class="pb-16 pt-10 font-semibold">
    <button
      on:click={() => {
        answer = "agree";
        handleClick("agree");
      }}
      class="border px-4 py-1 hover:bg-white hover:text-black transition-all ease-in duration-200 mr-2"
      >stimme zu</button
    >
    <button
      on:click={() => {
        answer = "neutral";
        handleClick("neutral");
      }}
      class="border px-4 py-1 hover:bg-white hover:text-black transition-all ease-in duration-200 mr-2"
      >neutral</button
    >
    <button
      on:click={() => {
        answer = "disagree";
        handleClick("disagree");
      }}
      class="border px-4 py-1 hover:bg-white hover:text-black transition-all ease-in duration-200"
      >stimme nicht zu</button
    >
  </div>
</div>
