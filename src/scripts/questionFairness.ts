import {
    addAnswerWeights,
    addWhaleWeights,
    multiplyWhaleWeights,
    newEmptyWeights,
    randomAnswer,
    type AnswerType,
    type Question,
    type WhaleWeights,
} from "$lib/question";
import { questions } from "$lib/questionData";

// this takes way to long lol
function allAnswerComb(n: number): AnswerType[][] {
    let answers: AnswerType[][] = [[]];

    for (let i = 0; i < n; i++) {
        console.log(`iteration ${i}`);
        let inter: AnswerType[][] = [];

        // console.log(answers.length);

        answers.forEach((a) => {
            inter = inter.concat([
                ["agree", ...a],
                ["neutral", ...a],
                ["disagree", ...a],
            ]);
        });

        // console.log(inter);
        answers = inter;
    }

    return answers;
}

function randomAnswerComb(n: number): AnswerType[] {
    let comb: AnswerType[] = [];

    for (let i = 0; i < n; i++) {
        comb.push(randomAnswer());
    }

    return comb;
}

function fuzzQuizFairness(
    questions: Question[],
    iterations: number
): WhaleWeights {
    let wins = newEmptyWeights();

    for (let i = 0; i < iterations; i++) {
        let answ = randomAnswerComb(questions.length);

        let winner = setHighestToOne(weighAnswerComb(answ, questions));

        wins = addWhaleWeights(wins, winner);
    }

    return multiplyWhaleWeights(wins, 1 / iterations);
}

function setHighestToOne(weights: WhaleWeights): WhaleWeights {
    // Find the key with the highest value
    const highestKey = Object.keys(weights).reduce((maxKey, currentKey) =>
        weights[currentKey as keyof WhaleWeights] >
        weights[maxKey as keyof WhaleWeights]
            ? currentKey
            : maxKey
    ) as keyof WhaleWeights;

    // Set the highest key to 1 and all others to 0
    const result: WhaleWeights = Object.keys(weights).reduce((acc, key) => {
        acc[key as keyof WhaleWeights] = key === highestKey ? 1 : 0;
        return acc;
    }, {} as WhaleWeights);

    return result;
}

function weighAnswerComb(a: AnswerType[], q: Question[]): WhaleWeights {
    if (q.length != a.length) {
        throw new Error("Must be same length as number of questions");
    }

    let weight = newEmptyWeights();

    q.forEach((e, i) => {
        weight = addAnswerWeights(weight, e, a[i]);
    });

    return weight;
}

function naiveQuizFairness(questions: Question[]) {
    let s = newEmptyWeights();

    questions.forEach((q) => {
        s = {
            belugawal: s.belugawal + Math.abs(q.weights.belugawal),
            blauwal: s.blauwal + Math.abs(q.weights.blauwal),
            buckelwal: s.buckelwal + Math.abs(q.weights.buckelwal),
            delfin: s.delfin + Math.abs(q.weights.delfin),
            grauwal: s.grauwal + Math.abs(q.weights.grauwal),
            narwal: s.narwal + Math.abs(q.weights.narwal),
            orca: s.orca + Math.abs(q.weights.orca),
            pottwal: s.pottwal + Math.abs(q.weights.pottwal),
            zwergwal: s.zwergwal + Math.abs(q.weights.zwergwal),
        };
    });

    return s;
}

console.log(`Quiz Fairness test (${questions.length})`);
console.log("Naive Quiz Fairness:");
console.log(naiveQuizFairness(questions));

let iterations = 1000000;
console.log(`Fuzzed Quiz Fairness: ${iterations}`);
console.log(fuzzQuizFairness(questions, iterations));
