export type Question = {
    question: string;
    weights: WhaleWeights;
};

export type WhaleWeights = {
    blauwal: number;
    buckelwal: number;
    pottwal: number;
    orca: number;
    grauwal: number;
    zwergwal: number;
    belugawal: number;
    narwal: number;
    delfin: number;
};

export function newEmptyWeights(): WhaleWeights {
    return {
        blauwal: 0,
        buckelwal: 0,
        pottwal: 0,
        orca: 0,
        grauwal: 0,
        zwergwal: 0,
        belugawal: 0,
        narwal: 0,
        delfin: 0,
    };
}

export function sortedWeights(w: WhaleWeights): [string, number][] {
    let entries = Object.entries(w) as [string, number][];

    entries.sort((a, b) => b[1] - a[1]);

    return entries;
}

export type AnswerType = "agree" | "neutral" | "disagree";
