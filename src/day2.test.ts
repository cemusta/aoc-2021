import { CalculateCoordinates, CalculateRealCoordinates } from './day2';
import { sample } from './inputs/input2';

describe('Day 2', () => {
  describe('CalculateCoordinates', () => {
    it('should find basic coordinates', () => {

      const increase = CalculateCoordinates(sample);

      expect(increase).toStrictEqual([15,10]);
    });
  });

  describe('CalculateRealCoordinates', () => {
    it('should find coordinates with aim', () => {

      const increase = CalculateRealCoordinates(sample);

      expect(increase).toStrictEqual([15,60]);
    });
  });
});