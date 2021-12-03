import { CalculateRates } from './day3';
import { sample } from './inputs/input3';

describe('Day 3', () => {
  describe('CalculateRates', () => {
    it('should find number of increases in input', () => {

      const increase = CalculateRates(sample);

      expect(increase).toStrictEqual(["10110", "01001"]);
    });
  });

  // describe('CalculateRealCoordinates', () => {
  //   it('should find number of increases in input', () => {

  //     const increase = CalculateRealCoordinates(sample);

  //     expect(increase).toStrictEqual([15,60]);
  //   });
  // });
});