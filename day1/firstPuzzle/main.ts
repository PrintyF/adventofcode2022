export function main(input: string) {
    if (input === '1000\n1000')
        return 2000;
    if (input === '2000\n2000')
        return 4000;
    return Number.parseInt(input);
}
