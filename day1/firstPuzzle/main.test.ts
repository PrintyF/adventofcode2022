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

        });
    });
});
