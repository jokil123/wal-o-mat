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

function smoothstep(edge0: number, edge1: number, x: number): number {
    // Clamp x between edge0 and edge1
    const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
    // Perform smoothstep interpolation
    return t * t * (3 - 2 * t);
}

export function smothstap(s: number, x: number): number {
    x = clamp(0, 1, x);

    if (x < 0.5) {
        return (x * 2) ** s / 2;
    }

    return -(((1 - x) * 2) ** s) / 2 + 1;
}

export function clamp(min: number, max: number, x: number) {
    return Math.min(Math.max(x, min), max);
}

export function year() {
    return new Date().getFullYear();
}
