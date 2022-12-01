import { main } from './main';

describe('main', () => {
    describe('One elf', () => {
        describe('One item', () => {
            test('should return 1000', () => {
                expect(main('1000')).toEqual(1000);
            });
            test('should return 2000', () => {
                expect(main('2000')).toEqual(2000);
            });
            test('should return 3000', () => {
                expect(main('3000')).toEqual(3000);
            });
        });
        describe('Two items', () => {
            test('should return 2000', () => {
                expect(main('1000\n1000')).toEqual(2000);
            });
            test('should return 4000', () => {
                expect(main('2000\n2000')).toEqual(4000);
            });
            test('should return 6000', () => {
                expect(main('3000\n3000')).toEqual(6000);
            });

        });
    });
    describe('two elves', () => {
        describe('One item each', () => {
            test('should return 2000', () => {
                expect(main('2000\n\n1000')).toEqual(2000);
            });
            test('should return 3000', () => {
                expect(main('2000\n\n3000')).toEqual(3000);
            });
            test('should return 5000', () => {
                expect(main('5000\n\n3000')).toEqual(5000);
            });
        });
    });
});
