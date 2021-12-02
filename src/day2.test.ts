import { CalculateCoordinates, CalculateRealCoordinates } from './day2';
import { sample } from './inputs/input2';

describe('Day 2', () => {
  describe('CalculateCoordinates', () => {
    it('should find number of increases in input', () => {

      const increase = CalculateCoordinates(sample);

      expect(increase).toStrictEqual([15,10]);
    });
  });

  describe('CalculateRealCoordinates', () => {
    it('should find number of increases in input', () => {

      const increase = CalculateRealCoordinates(sample);

      expect(increase).toStrictEqual([15,60]);
    });
  });
});