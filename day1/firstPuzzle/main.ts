export function main(input: string) {
    if (input.includes('\n')) {
        const arr: string[] = input.split('\n');
        let sum = 0;
        arr.forEach((el) => {
            sum += Number.parseInt(el);
        })
        return sum;
    }
    return Number.parseInt(input);
}
