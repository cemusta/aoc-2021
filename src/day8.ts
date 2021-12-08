import { input } from './inputs/input8';

export const countEasyDigits = (row: string): number => {
  let outputSignals = row.split('|')[1].trim().split(' ');
  return outputSignals.filter((n) => [2, 4, 3, 7].includes(n.length)).length;
};

export const countRealDigits = (row: string): number => {
  const signals = row
    .split('|')[0]
    .trim()
    .split(' ')
    .map((n) => n.split('').sort().join(''));

  let digits: { [key: string]: string } = {};

  // find digit patterns
  {
    const s1 = signals.find((x) => x.length === 2);
    const s4 = signals.find((x) => x.length === 4);
    const s7 = signals.find((x) => x.length === 3);
    const s8 = signals.find((x) => x.length === 7);

    const top = s4
      .split('')
      .filter((c) => !s7.split('').includes(c))
      .join('');

    // console.log(s7, s4, top); cg

    const bottom = s8
      .split('')
      .filter((c) => !s4.split('').includes(c))
      .filter((c) => !s7.split('').includes(c))
      .join('');

    // console.log(s8, s4, s7, bottom); af

    const fives = signals.filter((x) => x.length === 5);

    const s5 = fives.find((x) => top.split('').every((c) => x.includes(c)));
    const s2 = fives.find((x) => bottom.split('').every((c) => x.includes(c)));
    const s3 = fives.find((x) => x !== s5 && x !== s2);

    // console.log(5, s5);
    // console.log(2, s2);
    // console.log(3, s3);

    let sixes = signals.filter((sig) => sig.length === 6);

    const s9 = sixes.find((x) => !bottom.split('').every((c) => x.includes(c)));
    const s6 = sixes.filter((x) => x !== s9).find((x) => top.split('').every((c) => x.includes(c)));
    const s0 = sixes.find((x) => x !== s9 && x !== s6);

    // console.log(9, s9);
    // console.log(6, s6);
    // console.log(0, s0);

    digits[s0] = '0';
    digits[s1] = '1';
    digits[s2] = '2';
    digits[s3] = '3';
    digits[s4] = '4';
    digits[s5] = '5';
    digits[s6] = '6';
    digits[s7] = '7';
    digits[s8] = '8';
    digits[s9] = '9';
  }

  // console.log(digits);

  const outputSignals = row
    .split('|')[1]
    .trim()
    .split(' ')
    .map((n) => n.split('').sort().join(''));

  const sum = outputSignals.map((s) => digits[s]).join('');

  // console.log(outputSignals, sum);

  return Number(sum);
};

export const countDigits = (inputString: string, counterFunction: (numbers: string) => number) =>
  inputString.split('\n').reduce((acc, row) => acc + counterFunction(row), 0);

console.log('\nDay 8, part 1: ' + countDigits(input, countEasyDigits));
console.log('\nDay 8, part 2: ' + countDigits(input, countRealDigits));
