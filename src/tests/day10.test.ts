import { checkChunks, checkSyntax } from '../day10';
import { sample } from '../inputs/input10';

describe('Day 10', () => {
  describe('checkSyntax', () => {
    it('should return sum of syntax scores', () => {
      let sum = checkSyntax(sample);
      expect(sum).toStrictEqual(26397);
    });
  });

  describe('checkChunks', () => {
    it('should correctly check chunk syntax', () => {
      expect(checkChunks('[]')).toStrictEqual([1]);
      expect(checkChunks('([])')).toStrictEqual([1]);
      expect(checkChunks('{()()()}')).toStrictEqual([1]);
      expect(checkChunks('<([{}])>')).toStrictEqual([1]);
      expect(checkChunks('[<>({}){}[([])<>]]')).toStrictEqual([1]);
      expect(checkChunks('(((((((((())))))))))')).toStrictEqual([1]);

      expect(checkChunks(')')).toStrictEqual([-1, ')']);
      expect(checkChunks('(]')).toStrictEqual([-1, ']']);
      expect(checkChunks('{()()()>')).toStrictEqual([-1, '>']);
      expect(checkChunks('(((()))}')).toStrictEqual([-1, '}']);
      expect(checkChunks('<([]){()}[{}])')).toStrictEqual([-1, ')']);
      expect(checkChunks('((>)')).toStrictEqual([-1, '>']);

      expect(checkChunks('[')).toStrictEqual([0]);
      expect(checkChunks('[()')).toStrictEqual([0]);
    });
  });
});
