import * as fs from 'fs';
import * as path from 'path';

export function main(input: string) {
    const file = fs.readFileSync(path.join(__dirname, input), "utf8")
    return Math.max(...file.split('\n\n')
        .map((elf) => elf.split('\n')
            .map((el) => Number.parseInt(el))
            .reduce((previousValue, currentValue) => previousValue + currentValue)));
}

console.log(main('input'));