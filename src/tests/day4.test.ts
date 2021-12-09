import { runBingo } from '../day4';
import { sample } from '../inputs/input4';

describe('Day 4', () => {
  describe('runBingo', () => {
    it('should return winner boards unmarked numbers and last number of bingo game', () => {
      const winners = runBingo(sample);

      expect(winners[0].pickedNumber).toStrictEqual(24);
      expect(winners[0].number).toStrictEqual(188);

      expect(winners[winners.length - 1].pickedNumber).toStrictEqual(13);
      expect(winners[winners.length - 1].number).toStrictEqual(148);
    });
  });
});
