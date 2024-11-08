export function range(from: number, to: number): number[] {
    const result = [];
    let i = from;

    while (i <= to) {
        result.push(i);
        i += 1;
    }

    return result;
}

export function remap(
    inLow: number,
    inHigh: number,
    outLow: number,
    outHigh: number,
    t: number
) {
    // Calculate the proportion of `t` within the input range
    const proportion = (t - inLow) / (inHigh - inLow);
    // Map that proportion to the output range
    return outLow + proportion * (outHigh - outLow);
}
