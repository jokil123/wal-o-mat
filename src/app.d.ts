// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }

  type whaleValue = [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
  ];
  type answerType = "agree" | "neutral" | "disagree" | undefined;

  type Question = {
    question: string;
    agree: WeightArray;
    disagree: WeightArray;
  };
}

export {};
