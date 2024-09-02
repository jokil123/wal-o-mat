<script lang="ts">
  import Quiz from "$lib/components/quiz.svelte";
  import Results from "$lib/components/results.svelte";
  import { questions } from "./questions";

  let answer: answerType;
  let currentQuestion = 1;
  let editedTotalQuestions = questions.length; // to incorperate the neutral choice it gets subtracted 1 if neutral is pressed to not make the values atrificialy lower but to just ignore the question

  let renderQuiz = true;

  let pointsVector: whaleValue = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  let whaleNames = [
    "Blauwal",
    "Buckelwal ",
    "Pottwal",
    "Orca",
    "Grauwal",
    "Spermwal",
    "Finwal",
    "Zwergwal",
    "Belugawal",
    "Narwal",
  ];

  function vecAdd(first: whaleValue, second: whaleValue): whaleValue {
    second.forEach((elm, i) => {
      second[i] = second[i] + first[i];
    });

    return second;
  }

  function nextQuestion() {
    if (questions.length >= currentQuestion) {
      if (answer == "agree") {
        pointsVector = vecAdd(
          pointsVector,
          questions[currentQuestion - 1].agree
        );
      }

      if (answer == "neutral") {
        editedTotalQuestions -= 1;
      }

      if (answer == "disagree") {
        pointsVector = vecAdd(
          pointsVector,
          questions[currentQuestion - 1].disagree
        );
      }

      if (questions.length == currentQuestion) {
        renderQuiz = false; // switch to results mode
      }
    }
    if (questions.length > currentQuestion) {
      currentQuestion += 1; // go to the next question
    }
  }
</script>

<div class="mx-auto max-w-screen-md px-8 flex flex-col justify-start">
  <h1 class="text-8xl font-semibold mt-12">Wal-O-Mat</h1>
  <p class="text-2xl font-semibold mt-3">Atlantis 2024</p>
</div>

<div class="mt-8 max-w-screen-xl mx-auto">
  {#if renderQuiz}
    <Quiz
      question={questions[currentQuestion - 1].question}
      questionNr={currentQuestion}
      questionNrMax={questions.length}
      bind:answer
      on:buttonclick={() => {
        nextQuestion();
      }}
    />
  {:else}
    <Results rounds={editedTotalQuestions} {pointsVector} whales={whaleNames}
    ></Results>
  {/if}
</div>
