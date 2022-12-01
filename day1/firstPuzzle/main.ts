export function main(input: string) {
    const arr: number[] = input.split('\n').map((el) => Number.parseInt(el));
    return arr.reduce((previousValue, currentValue) => previousValue + currentValue);
}
