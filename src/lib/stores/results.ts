import { writable } from "svelte/store";

// Get the value out of storage on load.
const stored = localStorage.results;

// Set the stored value or a sane default.
export const results = writable(stored);

// Anytime the store changes, update the local storage value.
results.subscribe((value) => localStorage.results);
