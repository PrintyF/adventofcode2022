import * as fs from 'fs';
import * as path from 'path';


export function topElfCalorieFinder(file: string) {
    return Math.max(...file.split('\n\n')
        .map((elf) => elf.split('\n')
            .map((el) => Number.parseInt(el))
            .reduce((previousValue, currentValue) => previousValue + currentValue)));
}

function topElfCalorieFinderByInput(input: string) {
    const file = fs.readFileSync(path.join(__dirname, input), "utf8")
    return topElfCalorieFinder(file);
}

function topThreeElvesCalorieSum(input: string) {
    const file = fs.readFileSync(path.join(__dirname, input), "utf8")
    return file.split('\n\n')
        .map((elf) => elf.split('\n')
            .map((el) => Number.parseInt(el))
            .reduce((previousValue, currentValue) => previousValue + currentValue))
        .sort((a, b) => b - a).slice(0, 3)
        .reduce((previousValue, currentValue) => previousValue + currentValue);
}

console.log(topElfCalorieFinderByInput('input'));
console.log(topThreeElvesCalorieSum('input'));
