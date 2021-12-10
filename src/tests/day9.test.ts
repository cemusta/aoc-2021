import { sumOfLocalMinimas } from '../day9';
import { sample } from '../inputs/input9';

describe('Day 9', () => {
  describe('countDigits', () => {
    it('should return sum of easy digits when used with easy digit counter', () => {
      let sum = sumOfLocalMinimas(sample);
      expect(sum).toStrictEqual(15);
    });
  });
});
