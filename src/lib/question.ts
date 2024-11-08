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

export function addAnswerWeights(
    w: WhaleWeights,
    q: Question,
    a: AnswerType
): WhaleWeights {
    let m = a2M(a);

    return {
        blauwal: w.blauwal + q.weights.blauwal * m,
        buckelwal: w.buckelwal + q.weights.buckelwal * m,
        pottwal: w.pottwal + q.weights.pottwal * m,
        orca: w.orca + q.weights.orca * m,
        grauwal: w.grauwal + q.weights.grauwal * m,
        zwergwal: w.zwergwal + q.weights.zwergwal * m,
        belugawal: w.belugawal + q.weights.belugawal * m,
        narwal: w.narwal + q.weights.narwal * m,
        delfin: w.delfin + q.weights.delfin * m,
    };
}

export function sortedWeights(w: WhaleWeights): [string, number][] {
    let entries = Object.entries(w) as [string, number][];

    entries.sort((a, b) => b[1] - a[1]);

    return entries;
}

export type AnswerType = "agree" | "neutral" | "disagree";

export function a2M(a: AnswerType): number {
    switch (a) {
        case "agree":
            return 1;
        case "neutral":
            return 0;
        case "disagree":
            return -1;
    }
}
