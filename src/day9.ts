import { input } from './inputs/input9';

const getNondiogonalNeighbours = (matrix: any[][], x: number, y: number) => {
  const neighbours = [];

  const xLimit = matrix[0].length;
  const yLimit = matrix.length;

  if (y < 0 || y >= yLimit || x < 0 || x >= xLimit) {
    throw new Error(`Out of bounds: x: ${x}, y: ${y}`);
  }

  // matrix[y][x] = 'X';

  if (x >= 1) neighbours.push(matrix[y][x - 1]);
  if (y >= 1) neighbours.push(matrix[y - 1][x]);
  if (x + 1 < xLimit) neighbours.push(matrix[y][x + 1]);
  if (y + 1 < yLimit) neighbours.push(matrix[y + 1][x]);

  // neighbours.push(matrix[y][x]);

  // console.log(matrix.map((m) => m.join('')).join('\n'));

  return neighbours;
};

const findBasin = (matrix: any[][], x: number, y: number) => {};

export const sumOfLocalMinimas = (inputString: string) => {
  const matrix = inputString.split('\n').map((row) => row.split('').map(Number));

  const localMinimas = [];
  const minimaCoords = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      const neighbours = getNondiogonalNeighbours(matrix, j, i);
      if (neighbours.every((n) => n > matrix[i][j])) {
        localMinimas.push(matrix[i][j]);
        minimaCoords.push([j, i]);
      }
    }
  }

  console.log(localMinimas);

  return localMinimas.reduce((a, b) => a + b + 1, 0);
};

console.log('\nDay 9, part 1: ' + sumOfLocalMinimas(input));
