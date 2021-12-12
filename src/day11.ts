import { input, sample } from './inputs/input11';

export const increaseNeighbours = (matrix: string[][], x: number, y: number) => {
  for (let i = x - 1; i <= x + 1; i++) {
    for (let j = y - 1; j <= y + 1; j++) {
      if (i === x && j === y) {
        matrix[i][j] = '.'; // flashed
      }
      if (i < 0 || j < 0 || i >= matrix.length || j >= matrix[0].length) {
        continue;
      }
      if (matrix[i][j] !== '.') {
        matrix[i][j] = `${Number(matrix[i][j]) + 1}`;
      }
    }
  }
};

export const progressEnergyStep = (matrix: string[][]) => {
  // console.log('\n' + matrix.map((row) => row.join('')).join('\n'));

  // step 1 increase all by 1
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[i][j] = `${Number(matrix[i][j]) + 1}`;
    }
  }

  while (true) {
    // step 2 flash octopi
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (Number(matrix[i][j]) > 9) {
          increaseNeighbours(matrix, i, j);
        }
      }
    }

    if (matrix.some((row) => row.some((cell) => Number(cell) > 9))) {
      continue;
    }

    break;
  }

  // step 3 set flashed octopi to 0
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === '.') {
        matrix[i][j] = '0';
      }
    }
  }

  // console.log(matrix);
  // console.log('\n' + matrix.map((row) => row.join('')).join('\n'));

  return matrix;
};

export const countFlashes = (matrix: string[][]) => {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === '0') {
        count++;
      }
    }
  }
  return count;
};

export const countFlashesInSteps = (inputString: string, steps: number) => {
  let matrix: string[][] = inputString.split('\n').map((row) => row.split(''));

  let count = 0;
  for (let i = 0; i < steps; i++) {
    matrix = progressEnergyStep(matrix);
    count += countFlashes(matrix);
  }

  return count;
};

export const findFullFlash = (inputString: string) => {
  let matrix: string[][] = inputString.split('\n').map((row) => row.split(''));

  let count = 0;

  while (true) {
    matrix = progressEnergyStep(matrix);
    count++;

    if (matrix.every((row) => row.every((cell) => cell === '0'))) {
      break;
    }
  }

  return count;
};

console.log('\nDay 11, part 1: ' + countFlashesInSteps(input, 100));
console.log('\nDay 11, part 2: ' + findFullFlash(input));
