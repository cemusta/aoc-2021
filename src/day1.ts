
export const CountIncrease = (input:string) => {
  const numbers = input.split('\n').map((x) => Number(x));

  const increase = numbers.reduce((prev, curr, index, array) => {
    if(curr > array[index-1]) {
      return prev + 1;
    }
    return prev;
  }, 0);

  return increase;
};
