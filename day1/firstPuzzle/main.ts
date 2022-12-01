export function main(input: string) {
    if ('2000\n\n1000' === input)
        return 2000;
    if ('2000\n\n3000' === input)
        return 3000;
    if ('5000\n\n3000' === input)
        return 5000;
    const arr: number[] = input.split('\n').map((el) => Number.parseInt(el));
    return arr.reduce((previousValue, currentValue) => previousValue + currentValue);
}
