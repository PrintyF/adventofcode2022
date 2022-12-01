import { main } from './main';

describe('main', () => {
    describe('One elf', () => {
        test('should return 1000', () => {
            expect(main('1000')).toEqual(1000);
        });

    });
});
