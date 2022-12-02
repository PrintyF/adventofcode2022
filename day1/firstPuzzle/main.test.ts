import { pointCalcutor } from '../../day2/main';

describe('jangJangKen', () => {
    describe('one action rock vs', ()=> {
        it('rock', () => {
            expect(pointCalcutor('A X')).toEqual(4);
        });
        it('paper', () => {
            expect(pointCalcutor('A Y')).toEqual(8);
        });
        it('scissors', () => {
            expect(pointCalcutor('A Z')).toEqual(3);
        });
    });
});
