export function generateId(): string {
    return Math.random().toString(36).substr(2, 9)
}

export function limitInRange(num: number, range: [number, number]): number {
    return num < range[0] ? range[0] : num > range[1] ? range[1] : num
}
