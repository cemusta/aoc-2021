
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

export const CountIncreaseWindow = (input:string) => {
  const numbers = input.split('\n').map((x) => Number(x));

  let increase = 0;
  let prev = 0;

  numbers.forEach((number, index, array) => {
    let curr = array[index] + array[index+1] + array[index+2];

    if(prev != 0 && curr > prev) {
      increase++;
    }

    prev = curr;
  });

  return increase;
}