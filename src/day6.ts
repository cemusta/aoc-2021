import { input } from './inputs/input6';

export const populateFish2 = (inputString: string, days: number = 0) => {
  let fishPop: number[] = new Array(9).fill(0);

  let initialFishes = inputString.split(',').map(Number);

  initialFishes.forEach((fish) => {
    fishPop[fish]++;
  });

  console.log(fishPop);

  if (days < 20) console.log(`Init. > ${fishPop.join(',')}`);

  for (let i = 0; i < days; i++) {
    let newborn = fishPop.shift();

    fishPop.push(newborn);

    fishPop[6] += newborn;

    if (days < 20) console.log(`Day ${i + 1} > ${fishPop.join(',')}`);
  }

  return fishPop.reduce((acc, curr) => acc + curr);
};

console.log('\nDay 6, part 1: ' + populateFish2(input, 80));
console.log('\nDay 6, part 2: ' + populateFish2(input, 256));
