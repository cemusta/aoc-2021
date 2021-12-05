import { sample, input } from './inputs/input5';

type Point = { x: number; y: number };

type Line = {
  start: Point;
  end: Point;
};

export const isDiagonal = (line: Line) => {
  return line.start.x !== line.end.x && line.start.y !== line.end.y;
};

export const hydrothermalVent = (inputString: string, allowDiagonal: boolean = false) => {
  let limitX = 0;
  let limitY = 0;

  let lines = inputString.split('\n').map((line) => {
    const [start, end] = line.split(' -> ');
    const [x, y] = start.split(',').map(Number);
    const [x2, y2] = end.split(',').map(Number);

    if (x > limitX) limitX = x;
    if (y > limitY) limitY = y;
    if (x2 > limitX) limitX = x2;
    if (y2 > limitY) limitY = y2;

    return { start: { x, y }, end: { x: x2, y: y2 } };
  });

  let matrix: number[][] = new Array(limitX + 1).fill(0).map(() => new Array(limitY + 1).fill(0));

  if (!allowDiagonal) {
    lines = lines.filter((x) => !isDiagonal(x));
  }

  for (let line of lines) {
    // console.log(line);
    matrix = plotLine(line, matrix);
    // printMatrix(matrix);
  }
  // printMatrix(matrix);

  return countIntersections(matrix);
};

export const plotLine = (line: Line, matrix: number[][]) => {
  let len =
    Math.abs(line.start.x - line.end.x) === 0
      ? Math.abs(line.start.y - line.end.y)
      : Math.abs(line.start.x - line.end.x);
  let xDirection = line.start.x < line.end.x ? 1 : line.start.x === line.end.x ? 0 : -1;
  let yDirection = line.start.y < line.end.y ? 1 : line.start.y === line.end.y ? 0 : -1;

  for (let i = 0; i <= len; i++) {
    matrix[line.start.y + yDirection * i][line.start.x + xDirection * i]++;
  }

  return matrix;
};

export const printMatrix = (matrix: number[][]) => {
  for (let row of matrix) {
    console.log(row.join(' ').replace(/0/g, '.'));
  }
};

export const countIntersections = (matrix: number[][]) => {
  let count = 0;
  for (let row of matrix) {
    for (let cell of row) {
      if (cell > 1) count++;
    }
  }
  return count;
};

console.log('\nDay 5, part 1: ' + hydrothermalVent(input));
console.log('\nDay 5, part 2: ' + hydrothermalVent(input, true));
