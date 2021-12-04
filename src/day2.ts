import { input } from './inputs/input2';

export const CalculateCoordinates = (inputText: string) => {
  const commands = inputText.split('\n').map((x) => String(x));

  let depth = 0;
  let forward = 0;

  for (const command of commands) {
    const direction = command.split(' ')[0];
    const value = command.split(' ')[1];
    switch (direction) {
      case 'up':
        depth -= Number(value);
        if (depth < 0) {
          depth = 0;
        }
        break;
      case 'down':
        depth += Number(value);
        break;
      case 'forward':
        forward += Number(value);
        break;
      default:
        throw new Error('Invalid direction: ' + direction);
    }
  }

  return [forward, depth];
};

export const CalculateRealCoordinates = (inputText: string) => {
  const commands = inputText.split('\n').map((x) => String(x));

  let depth = 0;
  let forward = 0;
  let aim = 0;

  for (const command of commands) {
    const direction = command.split(' ')[0];
    const value = command.split(' ')[1];
    switch (direction) {
      case 'up':
        aim -= Number(value);
        break;
      case 'down':
        aim += Number(value);
        break;
      case 'forward':
        forward += Number(value);
        depth += aim * Number(value);
        if (depth < 0) {
          depth = 0;
        }
        break;
      default:
        throw new Error('Invalid direction: ' + direction);
    }
  }

  return [forward, depth];
};

const coordinates = CalculateCoordinates(input);
console.log('day2, part1: ', coordinates[0] * coordinates[1]);
const coordinates2 = CalculateRealCoordinates(input);
console.log('day2, part2: ', coordinates2[0] * coordinates2[1]);
