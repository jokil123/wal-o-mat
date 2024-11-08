import {
    addAnswerWeights,
    newEmptyWeights,
    type AnswerType,
    type Question,
    type WhaleWeights,
} from "$lib/question";
import { questions } from "$lib/questionData";
import { whalesInfo } from "$lib/whaleInfo";

// // recursive function
// function allAnsComb(
//     questions: Question[],
//     current: number,
//     weights: WhaleWeights
// ): WhaleWeights[] {
//     if (current >= questions.length) {
//         console.log("Returning");
//         return [weights];
//     }

//     let question = questions[current];

//     let answers: AnswerType[] = ["agree", "disagree", "neutral"];

//     let answerWeights: WhaleWeights[] = [];

//     answers.forEach((a) => {
//         let newWeights = addAnswerWeights(weights, question, a);

//         console.log(allAnsComb(questions, current + 1, newWeights));

//         answerWeights.concat(allAnsComb(questions, current + 1, newWeights));
//         console.log(answerWeights);
//     });

//     return answerWeights;
// }

function allAnsComb(n: number): AnswerType[][] {
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

console.log("Comprehensive Quiz Fairness:");

// let q = questions.slice(0, 1);
// console.log(`number of questions: ${q.length}`);

let comb = allAnsComb(questions.length);
console.log(`Permutations: (${comb.length}) \n[`);
comb.forEach((ans) => {
    console.log(`\t${ans}`);
});
console.log("]");

// console.log(allAnsComb(q, 0, newEmptyWeights()).length);
