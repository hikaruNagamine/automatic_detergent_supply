
export function sleep(ms: number): Promise<void> {
    // throw Error('sleepしてないよ')
    return new Promise<void>(resolve => setTimeout(resolve, ms));
}
