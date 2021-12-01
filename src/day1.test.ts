import { CountIncrease, CountIncreaseWindow } from './day1';
import { sample1 } from './inputs/input1';

describe('Day 1', () => {
  describe('CountIncrease', () => {
    it('should find number of increases in input', () => {

      const increase = CountIncrease(sample1);

      expect(increase).toStrictEqual(7);
    });
  });

  describe('CountIncreaseWindow', () => {
    it('should find number of increases in input', () => {

      const increase = CountIncreaseWindow(sample1);

      expect(increase).toStrictEqual(5);
    });
  });
});
