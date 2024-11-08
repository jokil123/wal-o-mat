<script lang="ts">
    import Quiz from "$lib/components/quiz.svelte";
    import {
        questions,
        type AnswerType,
        type Question,
        type WhaleWeights,
    } from "../../lib/questions";
    import logoWalOMat from "$lib/assets/wal-o-mat_logo.svg";
    import { results } from "$lib/stores/results";
    import { goto } from "$app/navigation";

    let answer: AnswerType;
    let currentQuestion = 0;

    let points: WhaleWeights = {
        blauwal: 0,
        buckelwal: 0,
        pottwal: 0,
        orca: 0,
        grauwal: 0,
        zwergwal: 0,
        belugawal: 0,
        narwal: 0,
        delfin: 0,
    };

    function addAnswerWeights(q: Question, a: AnswerType) {
        let m; // answer modifier

        switch (a) {
            case "agree":
                m = 1;
                break;
            case "neutral":
                m = 0;
                break;
            case "disagree":
                m = -1;
                break;
        }

        points = {
            blauwal: points.blauwal + q.weights.blauwal * m,
            buckelwal: points.buckelwal + q.weights.buckelwal * m,
            pottwal: points.pottwal + q.weights.pottwal * m,
            orca: points.orca + q.weights.orca * m,
            grauwal: points.grauwal + q.weights.grauwal * m,
            zwergwal: points.zwergwal + q.weights.zwergwal * m,
            belugawal: points.belugawal + q.weights.belugawal * m,
            narwal: points.narwal + q.weights.narwal * m,
            delfin: points.delfin + q.weights.delfin * m,
        };
    }

    function submitQuestion() {
        console.log("next question");
        if (currentQuestion < questions.length - 1) {
            addAnswerWeights(questions[currentQuestion], answer);
            currentQuestion++;
        }

        gotoResults();
    }

    function gotoResults() {
        results.set(points);
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
            currentQuestionIndex={currentQuestion}
            totalQuestions={questions.length}
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
