import { browser } from "$app/environment";
import { newEmptyWeights, type WhaleWeights } from "$lib/question";
import { json } from "@sveltejs/kit";
import { writable, type Writable } from "svelte/store";

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
export const results: Writable<WhaleWeights | null> = writable(stored || null);

// Anytime the store changes, update the local storage value.
results.subscribe((value) => {
    if (!browser) {
        return;
    }

    localStorage.results = JSON.stringify(value);
});
