<script lang="ts">
  import Quiz from "$lib/components/quiz.svelte";

  let answer: "agree" | "neutral" | "disagree" | undefined;
  let currentQuestion = 1;

  let pointsVector = [0, 0, 0, 0, 0, 0, 0];

  const questions = [
    {
      question: "Ich bevorzuge kältere Klimazonen gegenüber wärmeren.",
      agree: [0, 0, 0, 0, 0, 0, 0],
      disagree: [0, 0, 0, 0, 0, 0, 0],
    },
    {
      question: "Ich genieße es, in großen Gruppen von Menschen zu sein.",
      agree: [0, 0, 0, 0, 0, 0, 0],
      disagree: [0, 0, 0, 0, 0, 0, 0],
    },
    {
      question: "Ich bin ein starker und selbstbewusster Anführer.",
      agree: [0, 0, 0, 0, 0, 0, 0],
      disagree: [0, 0, 0, 0, 0, 0, 0],
    },
    {
      question: "Ich liebe es, regelmäßig lange Strecken zu reisen.",
      agree: [0, 0, 0, 0, 0, 0, 0],
      disagree: [0, 0, 0, 0, 0, 0, 0],
    },
    {
      question:
        "Ich bin für meine Intelligenz und meine Fähigkeit zur Problemlösung bekannt.",
      agree: [0, 0, 0, 0, 0, 0, 0],
      disagree: [0, 0, 0, 0, 0, 0, 0],
    },
  ];

  function nextQuestion() {
    console.log(currentQuestion + " " + questions.length);

    if (questions.length > currentQuestion) {
      currentQuestion += 1;
    } else {
      ("Quiz Vorbei");
    }
  }
</script>

<div class="mx-auto max-w-screen-md px-8 flex flex-col justify-start">
  <h1 class="text-8xl font-semibold mt-12">Wal-O-Mat</h1>
  <p class="text-2xl font-semibold mt-3">Atlantis 2024</p>
</div>

<div class="mt-8 max-w-screen-xl mx-auto">
  <Quiz
    question={questions[currentQuestion - 1].question}
    questionNr={currentQuestion}
    questionNrMax={questions.length}
    bind:answer
    on:buttonclick={() => {
      nextQuestion();
    }}
  />
</div>

<p>You answerd {answer}</p>
