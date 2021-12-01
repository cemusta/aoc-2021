import { CountIncrease, CountIncreaseWindow } from './day1';
import { input1 } from './inputs/input1';

const count = CountIncrease(input1);
console.log('count: ', count);
const count2 = CountIncreaseWindow(input1);
console.log('count2: ', count2);