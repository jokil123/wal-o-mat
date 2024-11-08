<script lang="ts">
    import type { AnswerType, Question } from "$lib/questions";
    import { createEventDispatcher } from "svelte";

    export let answer: AnswerType = "neutral";
    export let questions: Question[];
    export let currentQuestionIndex: number;

    let clicked = false;
    const dispatch = createEventDispatcher();

    function handleClick(buttonName: any) {
        clicked = true;
        dispatch("buttonclick", { button: buttonName });
        setTimeout(() => (clicked = false), 50);
    }

    export function range(from: number, to: number) {
        const result = [];
        let i = from;

        while (i <= to) {
            result.push(i);
            i += 1;
        }

        return result;
    }
</script>

<div class="relative">
    <div class="flex w-10/12 relative">
        {#each range(1, questions.length) as t}
            <div
                class="flex flex-col translate-x-0 absolute top-0 bottom-0 transition-all duration-100 w-full max-w-screen-xl
          {currentQuestionIndex < t ? 'translate-x-[100vw]' : ''}
          {currentQuestionIndex > t ? 'translate-x-[-100vw]' : ''}
          
        
        "
            >
                <div class="lg:w-10/12 lg:mx-auto">
                    <div
                        class=" bg-black border-2 py-3 px-10 question-container h-[320px]"
                    >
                        <div class="relative w-full">
                            <p
                                class="font-semibold text-lg lg:text-2xl lg:pb-8 pt-3"
                            >
                                Frage {t}/{questions.length}
                            </p>

                            <p class="text-xl lg:text-4xl pt-2">
                                {questions[t - 1].question}
                            </p>
                            <div
                                class="pb-8 pt-5 lg:pt-16 font-semibold flex flex-col lg:flex-row w-4/6 lg:w-10/12 mx-auto lg:mx-0 text-lg"
                            >
                                <button
                                    on:click={() => {
                                        currentQuestionIndex += 1;
                                        answer = "agree";
                                        handleClick("agree");
                                    }}
                                    class="border-2 w-full lg:w-1/3 mb-3 lg:mb-0 py-1 lg:mr-3 hover:bg-white hover:text-black transition-colors ease-in duration-200 mr-2"
                                    >stimme zu</button
                                >
                                <button
                                    on:click={() => {
                                        currentQuestionIndex += 1;
                                        answer = "neutral";
                                        handleClick("neutral");
                                    }}
                                    class="border-2 w-full lg:w-1/3 mb-3 lg:mb-0 py-1 lg:mr-3 hover:bg-white hover:text-black transition-colors ease-in duration-200 mr-2"
                                    >neutral</button
                                >
                                <button
                                    on:click={() => {
                                        currentQuestionIndex += 1;
                                        answer = "disagree";
                                        handleClick("disagree");
                                    }}
                                    class="border-2 w-full lg:w-1/3 mb-3 lg:mb-0 py-1 lg:mr-3 hover:bg-white hover:text-black transition-colors ease-in duration-200"
                                    >stimme nicht zu</button
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="w-10/12 mx-auto"
                    style="
            width: calc(83.333333% - 60px)
            transform: translateX(-30px)"
                >
                    <div
                        class="triangle hidden lg:flex"
                        style="transform: translateX({((currentQuestionIndex -
                            1) /
                            (questions.length - 1)) *
                            1340}%) rotate(90deg); "
                    ></div>
                </div>
            </div>
        {/each}
        <div class="w-full left-1/4">
            <div
                class="max-w-screen-lg flex flex-row mx-auto w-full justify-between"
                style="transform: translateY(400px) translateX(-30px); 
        width: calc(83.333333% - 60px + 11px);"
            >
                {#each questions as question, i}
                    <div class="w-full">
                        <div
                            class="z-20 w-[11px] h-[11px] rounded-full bg-[#808080] {i ==
                                currentQuestionIndex - 1 &&
                                'bg-white outline outline-2 outline-white outline-offset-2'}"
                        ></div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>

<style>
    .triangle {
        width: 0px;
        height: 0px;
        border-style: solid;
        border-width: 0 60px 60px 0px;
        border-color: transparent transparent white transparent;
    }
</style>
