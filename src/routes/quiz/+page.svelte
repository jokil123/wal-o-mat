<script lang="ts">
  import Quiz from "$lib/components/quiz.svelte";
  import Results from "$lib/components/results.svelte";

  let answer: answerType;
  let currentQuestion = 1;

  let renderQuiz = true;

  let pointsVector: whaleValue = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  let whaleNames = [
    "Bluewal",
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

  function w(
    bluewhale: number,
    buckelwhale: number,
    pottwhale: number,
    orcal: number,
    grauwhal: number,
    spermwahle: number,
    finwhale: number,
    zwergwhale: number,
    belugawhale: number,
    narwhale: number
  ): whaleValue {
    return [
      bluewhale,
      buckelwhale,
      pottwhale,
      orcal,
      grauwhal,
      spermwahle,
      finwhale,
      zwergwhale,
      belugawhale,
      narwhale,
    ];
  }

  function vecAdd(first: whaleValue, second: whaleValue): whaleValue {
    second.forEach((elm, i) => {
      second[i] = second[i] + first[i];
    });

    return second;
  }

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

  const questions = [
    {
      question: "Ich bevorzuge kältere Klimazonen gegenüber wärmeren.",
      agree: w(1, 0, 0, 0, 1, 1, 0, 0, 1, 1),
      disagree: w(0, 1, 1, 1, 0, 0, 1, 1, 0, 0),
    },
    {
      question: "Ich genieße es, in großen Gruppen von Menschen zu sein.",
      agree: w(0, 1, 0, 1, 0, 0, 0, 1, 1, 1),
      disagree: w(1, 0, 1, 0, 1, 1, 1, 0, 0, 0),
    },
    {
      question: "Ich bin ein starker und selbstbewusster Anführer.",
      agree: w(1, 0, 1, 1, 0, 1, 0, 0, 0, 0),
      disagree: w(0, 1, 0, 0, 1, 0, 1, 1, 1, 1),
    },
    {
      question: "Ich liebe es, regelmäßig lange Strecken zu reisen.",
      agree: w(1, 0, 1, 0, 1, 1, 1, 0, 0, 1),
      disagree: w(0, 1, 0, 1, 0, 0, 0, 1, 1, 0),
    },
    {
      question:
        "Ich bin für meine Intelligenz und meine Fähigkeit zur Problemlösung bekannt.",
      agree: w(0, 1, 1, 0, 1, 1, 0, 0, 0, 1),
      disagree: w(1, 0, 0, 1, 0, 0, 1, 1, 1, 0),
    },
    {
      question: "Ich habe eine tiefe Verbindung zur Natur und zum Meer.",
      agree: w(1, 1, 1, 0, 1, 1, 1, 0, 1, 1),
      disagree: w(0, 0, 0, 1, 0, 0, 0, 1, 0, 0),
    },
    {
      question: "Ich bin eher introvertiert und genieße die Einsamkeit.",
      agree: w(0, 1, 1, 0, 1, 0, 0, 1, 1, 1),
      disagree: w(1, 0, 0, 1, 0, 1, 1, 0, 0, 0),
    },
    {
      question:
        "Ich bin sehr beschützerisch gegenüber meiner Familie und meinen Freunden.",
      agree: w(1, 1, 0, 1, 1, 1, 1, 0, 1, 1),
      disagree: w(0, 0, 1, 0, 0, 0, 0, 1, 0, 0),
    },
    {
      question:
        "Ich bin oft der Erste, der neue Dinge ausprobiert, auch wenn sie riskant erscheinen.",
      agree: w(0, 0, 1, 1, 0, 1, 0, 1, 0, 1),
      disagree: w(1, 1, 0, 0, 1, 0, 1, 0, 1, 0),
    },
    {
      question: "Ich bin ein guter Kommunikator und drücke mich gerne aus.",
      agree: w(0, 1, 0, 0, 0, 1, 0, 1, 1, 1),
      disagree: w(1, 0, 1, 1, 1, 0, 1, 0, 0, 0),
    },
    {
      question: "Ich passe mich gut an neue Umgebungen und Situationen an.",
      agree: w(0, 1, 1, 0, 1, 1, 1, 0, 0, 1),
      disagree: w(1, 0, 0, 1, 0, 0, 0, 1, 1, 0),
    },
    {
      question:
        "Ich habe einen starken Orientierungssinn und verlaufe mich selten.",
      agree: w(1, 0, 1, 0, 1, 0, 1, 0, 1, 0),
      disagree: w(0, 1, 0, 1, 0, 1, 0, 1, 0, 1),
    },
    {
      question: "Ich bin ein Teamplayer und arbeite gerne in Gruppen.",
      agree: w(0, 1, 0, 1, 0, 1, 0, 1, 1, 1),
      disagree: w(1, 0, 1, 0, 1, 0, 1, 0, 0, 0),
    },
    {
      question:
        "Ich bevorzuge Beständigkeit und Routine in meinem täglichen Leben.",
      agree: w(0, 1, 0, 0, 0, 1, 0, 1, 0, 1),
      disagree: w(1, 0, 1, 1, 1, 0, 1, 0, 1, 0),
    },
    {
      question:
        "Ich habe ein Talent dafür, Details und Informationen zu merken.",
      agree: w(0, 1, 1, 0, 1, 1, 0, 0, 1, 1),
      disagree: w(1, 0, 0, 1, 0, 0, 1, 1, 0, 0),
    },
    {
      question: "Ich bin für meine körperliche Stärke und Ausdauer bekannt.",
      agree: w(0, 0, 1, 1, 0, 1, 0, 0, 1, 1),
      disagree: w(1, 1, 0, 0, 1, 0, 1, 1, 0, 0),
    },
    {
      question: "Ich bevorzuge ruhige, friedliche Umgebungen gegenüber lauten.",
      agree: w(1, 0, 0, 0, 1, 0, 0, 1, 1, 0),
      disagree: w(0, 1, 1, 1, 0, 1, 1, 0, 0, 1),
    },
    {
      question:
        "Ich bin ein guter Zuhörer und nehme oft Dinge wahr, die andere übersehen.",
      agree: w(0, 1, 1, 0, 1, 1, 0, 1, 1, 1),
      disagree: w(1, 0, 0, 1, 0, 0, 1, 0, 0, 0),
    },
    {
      question: "Ich genieße es, aufzutreten oder im Mittelpunkt zu stehen.",
      agree: w(0, 1, 0, 1, 0, 0, 0, 1, 1, 0),
      disagree: w(1, 0, 1, 0, 1, 1, 1, 0, 0, 1),
    },
    {
      question: "Ich bin sehr neugierig und erkunde gerne neue Orte.",
      agree: w(1, 0, 0, 1, 1, 1, 1, 0, 1, 1),
      disagree: w(0, 1, 1, 0, 0, 0, 0, 1, 0, 0),
    },
    {
      question: "Ich habe eine fürsorgliche und liebevolle Natur.",
      agree: w(1, 1, 0, 1, 1, 1, 1, 0, 1, 1),
      disagree: w(0, 0, 1, 0, 0, 0, 0, 1, 0, 0),
    },
    {
      question:
        "Ich ziehe es vor, für mich zu bleiben und Konflikte zu vermeiden, wenn möglich.",
      agree: w(0, 1, 1, 0, 1, 0, 0, 1, 1, 1),
      disagree: w(1, 0, 0, 1, 0, 1, 1, 0, 0, 0),
    },
    {
      question:
        "Ich gedeihe in herausfordernden Situationen und genieße es, Hindernisse zu überwinden.",
      agree: w(0, 0, 1, 1, 0, 1, 0, 1, 1, 1),
      disagree: w(1, 1, 0, 0, 1, 0, 1, 0, 0, 0),
    },
    {
      question:
        "Ich bin ein bisschen ein Perfektionist und mag es, Dinge auf eine bestimmte Weise zu erledigen.",
      agree: w(0, 1, 1, 0, 1, 1, 0, 1, 0, 1),
      disagree: w(1, 0, 0, 1, 0, 0, 1, 0, 1, 0),
    },
    {
      question:
        "Ich schätze meine Unabhängigkeit und ziehe es vor, Dinge alleine zu tun.",
      agree: w(0, 1, 0, 1, 0, 1, 0, 1, 0, 1),
      disagree: w(1, 0, 1, 0, 1, 0, 1, 0, 1, 0),
    },
    {
      question: "Ich lerne schnell und kann neue Fähigkeiten schnell erlernen.",
      agree: w(1, 0, 1, 0, 1, 1, 1, 0, 1, 1),
      disagree: w(0, 1, 0, 1, 0, 0, 0, 1, 0, 0),
    },
    {
      question:
        "Ich helfe gerne anderen und stelle oft ihre Bedürfnisse vor meine eigenen.",
      agree: w(1, 1, 0, 1, 1, 1, 1, 0, 1, 1),
      disagree: w(0, 0, 1, 0, 0, 0, 0, 1, 0, 0),
    },
    {
      question:
        "Ich bin für meinen einzigartigen Stil oder meine Persönlichkeit bekannt.",
      agree: w(0, 1, 1, 0, 1, 1, 1, 0, 1, 1),
      disagree: w(1, 0, 0, 1, 0, 0, 0, 1, 0, 0),
    },
    {
      question:
        "Ich habe ein starkes Gemeinschaftsgefühl und bin gerne Teil einer Gruppe.",
      agree: w(0, 1, 0, 1, 0, 1, 0, 1, 1, 1),
      disagree: w(1, 0, 1, 0, 1, 0, 1, 0, 0, 0),
    },
    {
      question: "Ich bleibe ruhig unter Druck und gehe gut mit Stress um.",
      agree: w(0, 1, 1, 0, 1, 1, 0, 1, 0, 1),
      disagree: w(1, 0, 0, 1, 0, 0, 1, 0, 1, 0),
    },
  ];
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
    <Results rounds={questions.length} {pointsVector} whales={whaleNames}
    ></Results>
  {/if}
</div>
