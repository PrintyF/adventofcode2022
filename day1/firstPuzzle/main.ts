export function main(input: string) {
    return Math.max(...input.split('\n\n')
        .map((elf) => elf.split('\n')
            .map((el) => Number.parseInt(el))
            .reduce((previousValue, currentValue) => previousValue + currentValue)));
}

