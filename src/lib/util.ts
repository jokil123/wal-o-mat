export function range(from: number, to: number): number[] {
    const result = [];
    let i = from;

    while (i <= to) {
        result.push(i);
        i += 1;
    }

    return result;
}
