export function generateId(): string {
    return new Date().toISOString()
}

export function limitInRange(num: number, range: [number, number]): number {
    return num < range[0] ? range[0] : num > range[1] ? range[1] : num
}
