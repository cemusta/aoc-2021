import { countFlashesInSteps, findFullFlash, progressEnergyStep } from '../day11';
import { sample, simple, step1, step2, step3, step4 } from '../inputs/input11';

describe('Day 11', () => {
  describe('progressEnergyStep', () => {
    it('should return correct result for small matrix', () => {
      let matrix = [
        ['1', '1'],
        ['1', '1'],
      ];

      matrix = progressEnergyStep(matrix);
      expect(matrix.map((row) => row.join('')).join('\n')).toBe('22\n22');

      matrix = progressEnergyStep(matrix);
      expect(matrix.map((row) => row.join('')).join('\n')).toBe('33\n33');

      matrix = progressEnergyStep(matrix);
      expect(matrix.map((row) => row.join('')).join('\n')).toBe('44\n44');
    });

    it('should calculate octopus matrix steps correctly with simple sample', () => {
      let matrix = simple.split('\n').map((row) => row.split(''));

      matrix = progressEnergyStep(matrix);
      expect(matrix.map((row) => row.join('')).join('\n')).toBe(
        '34543\n40004\n50005\n40004\n34543',
      );

      matrix = progressEnergyStep(matrix);
      expect(matrix.map((row) => row.join('')).join('\n')).toBe(
        '45654\n51115\n61116\n51115\n45654',
      );
    });

    it('should calculate octopus matrix steps correctly normal sample', () => {
      let matrix = sample.split('\n').map((row) => row.split(''));

      matrix = progressEnergyStep(matrix);
      expect(matrix.map((row) => row.join('')).join('\n')).toBe(step1);

      matrix = progressEnergyStep(matrix);
      expect(matrix.map((row) => row.join('')).join('\n')).toBe(step2);

      matrix = progressEnergyStep(matrix);
      expect(matrix.map((row) => row.join('')).join('\n')).toBe(step3);

      matrix = progressEnergyStep(matrix);
      expect(matrix.map((row) => row.join('')).join('\n')).toBe(step4);
    });
  });

  describe('countFlashesInSteps', () => {
    it('should calculate flashes correctly', () => {
      expect(countFlashesInSteps(sample, 10)).toBe(204);
      expect(countFlashesInSteps(sample, 100)).toBe(1656);
    });
  });

  describe('findFullFlash', () => {
    it('should calculate flashes correctly', () => {
      expect(findFullFlash(sample)).toBe(195);
    });
  });
});
