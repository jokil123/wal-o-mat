<script lang="ts">
  import Quiz from "$lib/components/quiz.svelte";
  import Results from "$lib/components/results.svelte";
  import { questions } from "../../lib/questions";
  import logoWalOMat from "$lib/assets/wal-o-mat_logo.svg";

  let answer: answerType;
  let currentQuestion = 1;
  let editedTotalQuestions = questions.length; // to incorperate the neutral choice it gets subtracted 1 if neutral is pressed to not make the values artificially lower but to just ignore the question

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
    console.log("next question");
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

    currentQuestion += 1; // go to the next question
    console.log(currentQuestion);
  }

  console.log(currentQuestion);
</script>

<div
  class="mx-auto max-w-screen-lg mt-16 flex flex-col justify-start px-6 lg:px-0"
>
  <img src={logoWalOMat} alt="wal-o-mat logo" class="invert w-1/2" />
  <p class="text-md font-semibold mt-3 lg:text-2xl">Atlantis 2024</p>
</div>

<div class="mt-8 max-w-screen-xl mx-auto">
  {#if renderQuiz}
    <div class="mx-4">
      <Quiz
        {questions}
        {currentQuestion}
        totalQuestions={questions.length}
        bind:answer
        on:buttonclick={() => {
          nextQuestion();
        }}
      />
    </div>
  {:else}
    <Results rounds={editedTotalQuestions} {pointsVector} whales={whaleNames}
    ></Results>
  {/if}
</div>
