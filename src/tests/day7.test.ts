import { calculateFuel, calculateFuel2, calculateLeastFuel } from '../day7';
import { sample } from '../inputs/input7';

describe('Day 7', () => {
  describe('calculateLeastFuel', () => {
    it('should find least fuel for with first fuel function', () => {
      const pop = calculateLeastFuel(sample, calculateFuel);
      expect(pop).toStrictEqual(37);
    });

    it('should find least fuel for with second fuel function', () => {
      const pop = calculateLeastFuel(sample, calculateFuel2);
      expect(pop).toStrictEqual(168);
    });
  });
});
