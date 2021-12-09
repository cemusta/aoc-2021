import { hydrothermalVent } from '../day5';
import { sample } from '../inputs/input5';

describe('Day 5', () => {
  describe('hydrothermalVent', () => {
    it('should return intersection counts of vent lines', () => {
      const intersections = hydrothermalVent(sample);

      expect(intersections).toStrictEqual(5);
    });

    it('should return intersection counts of vent lines including diagonal lines', () => {
      const intersections = hydrothermalVent(sample, true);

      expect(intersections).toStrictEqual(12);
    });
  });
});
