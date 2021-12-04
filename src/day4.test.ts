import { runBingo } from './day4';
import { sample } from './inputs/input4';

describe('Day 4', () => {
  console.log = jest.fn();
  describe('runBingo', () => {
    it('should return winner boards unmarked numbers and last number of bingo game', () => {

      const [lastNum, sumOfUnmarked] = runBingo(sample);

      expect(lastNum).toStrictEqual(24);
      expect(sumOfUnmarked).toStrictEqual(188);
    });
  });
});