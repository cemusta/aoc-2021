import { input } from './inputs/input7';

export const calculateLeastFuel = (
  inputString: string,
  fuelFunction: (pos: number, target: number) => number,
) => {
  const submarines = inputString.split(',').map(Number);

  let minFuel = Number.MAX_SAFE_INTEGER;

  for (let i = Math.min(...submarines); i <= Math.max(...submarines); i++) {
    let pos = submarines.reduce((acc, curr) => acc + fuelFunction(curr, i), 0);
    if (minFuel > pos) {
      minFuel = pos;
    }
  }

  return minFuel;
};

export const calculateFuel = (pos: number, target: number) => Math.abs(pos - target);

export const calculateFuel2 = (pos: number, target: number) =>
  incrementalSum(Math.abs(pos - target));

const incrementalSum = (num: number): number => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

console.log('\nDay 7, part 1: ' + calculateLeastFuel(input, calculateFuel));
console.log('Day 7, part 2: ' + calculateLeastFuel(input, calculateFuel2));
