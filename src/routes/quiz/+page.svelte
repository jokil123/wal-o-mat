<script lang="ts">
    import Quiz from "$lib/components/Quiz.svelte";
    import logoWalOMat from "$lib/assets/wal-o-mat_logo.svg";
    import { results } from "$lib/stores/results";
    import { goto } from "$app/navigation";
    import {
        addAnswerWeights,
        newEmptyWeights,
        type AnswerType,
    } from "$lib/question";
    import { questions } from "$lib/questionData";

    let answer: AnswerType;
    let currentQuestionIndex = 0;
    let answeredQuestions = 0;

    let scores = newEmptyWeights();

    function submitQuestion() {
        console.log("next question");

        if (currentQuestionIndex >= questions.length - 1) {
            gotoResults();
            return;
        }

        scores = addAnswerWeights(
            scores,
            questions[currentQuestionIndex],
            answer
        );

        currentQuestionIndex++;
        if (answer != "neutral") {
            answeredQuestions++;
        }
    }

    function gotoResults() {
        results.set({
            scores: scores,
            answeredQuestions: answeredQuestions,
        });
        goto("/results");
    }
</script>

<div
    class="mx-auto max-w-screen-lg mt-16 flex flex-col justify-start px-6 lg:px-0"
>
    <img src={logoWalOMat} alt="wal-o-mat logo" class="invert w-1/2" />
    <p class="text-md font-semibold mt-3 lg:text-2xl">Atlantis 2024</p>
</div>

<div class="mt-8 max-w-screen-xl mx-auto">
    <div class="mx-4">
        <Quiz
            {questions}
            {currentQuestionIndex}
            bind:answer
            on:buttonclick={() => {
                submitQuestion();
            }}
        />
    </div>
</div>

<style lang="scss">
    .triangle {
        width: 0px;
        height: 0px;
        border-style: solid;
        border-width: 0 60px 60px 0px;
        border-color: transparent transparent white transparent;
        transform: rotate(90deg);
    }
</style>
