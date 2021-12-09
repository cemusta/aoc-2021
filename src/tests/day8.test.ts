import { countDigits, countEasyDigits, countRealDigits } from '../day8';
import { sample } from '../inputs/input8';

describe('Day 8', () => {
  describe('countDigits', () => {
    it('should return sum of easy digits when used with easy digit counter', () => {
      let sum = countDigits(sample, countEasyDigits);
      expect(sum).toStrictEqual(26);
    });

    it('should deduce and return sum of output signals', () => {
      let sum = countDigits(sample, countRealDigits);
      expect(sum).toStrictEqual(61229);
    });
  });
});
