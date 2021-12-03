import { CalculateLifeSupport, CalculateRates, findLeastCommonBit, findMostCommonBit } from './day3';
import { sample } from './inputs/input3';

describe('Day 3', () => {
  describe('CalculateRates', () => {
    it('should find correct gamma and epsilon rates', () => {

      const increase = CalculateRates(sample);

      expect(increase).toStrictEqual([22, 9]);
    });
  });

  describe('CalculateLifeSupport', () => {
    it('should correct Oxygen production and Co2 scrubbing rates', () => {

      const ox = CalculateLifeSupport(sample, findMostCommonBit);
      expect(ox).toStrictEqual(23);

      const co2 = CalculateLifeSupport(sample, findLeastCommonBit);
      expect(co2).toStrictEqual(10);
    });
  });
});