import { populateFish2 } from './day6';
import { sample } from './inputs/input6';

describe('Day 6', () => {
  describe('populateFish2', () => {
    it('should find correct population for given days', () => {
      const pop = populateFish2(sample, 18);
      expect(pop).toStrictEqual(26);

      const pop2 = populateFish2(sample, 80);
      expect(pop2).toStrictEqual(5934);
    });
  });
});
