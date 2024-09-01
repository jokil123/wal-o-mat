<script lang="ts">
  import Quiz from "$lib/components/quiz.svelte";
  import Results from "$lib/components/results.svelte";

  let answer: "agree" | "neutral" | "disagree" | undefined;
  let currentQuestion = 1;

  let renderQuiz = true;

  let whalevalues: whaleValue = w(1, 2, 3);

  function w(
    bluewhale: number,
    potwhale: number,
    cumwhale: number
  ): whaleValue {
    return [bluewhale, potwhale, cumwhale];
  }

  let pointsVector: whaleValue = [0, 0, 0];

  function vecAdd(first: whaleValue, second: whaleValue): whaleValue {
    second.forEach((elm, i) => {
      second[i] = second[i] + first[i];
    });

    return second;
  }

  const questions = [
    {
      question: "Ich bevorzuge kältere Klimazonen gegenüber wärmeren.",
      agree: w(1, 0, 1),
      disagree: w(0, 1, 1),
    },
    {
      question: "Ich genieße es, in großen Gruppen von Menschen zu sein.",
      agree: w(0, 1, 1),
      disagree: w(0, 0, 1),
    },
    {
      question: "Ich bin ein starker und selbstbewusster Anführer.",
      agree: w(1, 0, 0),
      disagree: w(1, 0, 1),
    },
    {
      question: "Ich liebe es, regelmäßig lange Strecken zu reisen.",
      agree: w(1, 0, 1),
      disagree: w(1, 0, 1),
    },
    {
      question:
        "Ich bin für meine Intelligenz und meine Fähigkeit zur Problemlösung bekannt.",
      agree: w(0, 0, 1),
      disagree: w(1, 0, 1),
    },
  ];

  function nextQuestion() {
    console.log(currentQuestion + " " + questions.length);

    if (questions.length >= currentQuestion) {
      if (answer == "agree") {
        pointsVector = vecAdd(
          pointsVector,
          questions[currentQuestion - 1].agree
        );
      }
      if (answer == "disagree") {
        pointsVector = vecAdd(
          pointsVector,
          questions[currentQuestion - 1].disagree
        );
      }
      console.log(pointsVector);

      if (questions.length == currentQuestion) {
        renderQuiz = false;
      }
    }
    if (questions.length > currentQuestion) {
      currentQuestion += 1;
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
    <Results rounds={questions.length} {pointsVector}></Results>
  {/if}
</div>
