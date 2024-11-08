import { browser } from "$app/environment";
import type { WhaleWeights } from "$lib/question";
import { writable, type Writable } from "svelte/store";

export type QuizResult = {
    answeredQuestions: number;
    scores: WhaleWeights;
};

// Get the value out of storage on load.
let stored;
if (browser) {
    try {
        stored = JSON.parse(localStorage.results);
    } catch (e) {
        console.log(e);
    }
}

// Set the stored value or a sane default.
export const results: Writable<QuizResult | null> = writable(stored || null);

// Anytime the store changes, update the local storage value.
results.subscribe((value) => {
    if (!browser) {
        return;
    }

    localStorage.results = JSON.stringify(value);
});
