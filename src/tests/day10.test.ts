import { calculateAutocomplateScore, checkChunks, checkSyntax, doAutocomplete } from '../day10';
import { sample } from '../inputs/input10';

describe('Day 10', () => {
  describe('checkChunks', () => {
    it('should correctly check chunk syntax', () => {
      expect(checkChunks('[]')).toStrictEqual([1, '']);
      expect(checkChunks('([])')).toStrictEqual([1, '']);
      expect(checkChunks('{()()()}')).toStrictEqual([1, '']);
      expect(checkChunks('<([{}])>')).toStrictEqual([1, '']);
      expect(checkChunks('[<>({}){}[([])<>]]')).toStrictEqual([1, '']);
      expect(checkChunks('(((((((((())))))))))')).toStrictEqual([1, '']);

      expect(checkChunks(')')).toStrictEqual([-1, ')']);
      expect(checkChunks('(]')).toStrictEqual([-1, ']']);
      expect(checkChunks('{()()()>')).toStrictEqual([-1, '>']);
      expect(checkChunks('(((()))}')).toStrictEqual([-1, '}']);
      expect(checkChunks('<([]){()}[{}])')).toStrictEqual([-1, ')']);
      expect(checkChunks('((>)')).toStrictEqual([-1, '>']);

      expect(checkChunks('[')).toStrictEqual([0, ']']);
      expect(checkChunks('[()')).toStrictEqual([0, ']']);

      expect(checkChunks('[({(<(())[]>[[{[]{<()<>>')).toStrictEqual([0, '}}]])})]']);
      expect(checkChunks('<{([{{}}[<[[[<>{}]]]>[]]')).toStrictEqual([0, '])}>']);
    });
  });

  describe('checkSyntax', () => {
    it('should return sum of syntax scores', () => {
      let sum = checkSyntax(sample);
      expect(sum).toStrictEqual(26397);
    });
  });

  describe('calculateAutocomplateScore', () => {
    it('should correctly autocomplete scorex', () => {
      expect(calculateAutocomplateScore('}}]])})]')).toStrictEqual(288957);
      expect(calculateAutocomplateScore('])}>')).toStrictEqual(294);
    });
  });

  describe('doAutocomplete', () => {
    it('should return sum of autocomplete scores', () => {
      let sum = doAutocomplete(sample);
      expect(sum).toStrictEqual(288957);
    });
  });
});
