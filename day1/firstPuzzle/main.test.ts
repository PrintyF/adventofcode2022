import { main } from './main';

describe('main', () => {
    describe('One elf', () => {
        test('should return 1000', () => {
            expect(main('1000')).toEqual(1000);
        });
        test('should return 2000', () => {
            expect(main('2000')).toEqual(2000);
        });

    });
});
