import { input, sample } from './inputs/input10';

const syntaxErrorScore: { [key: string]: number } = {
  ')': 3,
  ']': 57,
  '}': 1197,
  '>': 25137,
};

export const checkChunks = (chunks: string) => {
  const openChars = ['{', '[', '<', '('];
  const reverseChars: { [key: string]: string } = {
    '}': '{',
    ']': '[',
    '>': '<',
    ')': '(',
  };
  const stack: string[] = [];
  for (let char of chunks.split('')) {
    if (openChars.includes(char)) {
      stack.push(char);
    } else {
      let last = stack.pop();
      if (last !== reverseChars[char]) {
        return [-1, char]; // corrupted
      }
    }
  }

  if (stack.length > 0) {
    return [0]; // incomplete
  }
  return [1]; // valid
};

export const checkSyntax = (inputString: string) => {
  const chunks = inputString.split('\n');
  const results = chunks.map((chunk) => checkChunks(chunk));
  const chars = results.filter((result) => result[0] === -1).map((result) => result[1]);

  return chars.map((char: string) => syntaxErrorScore[char]).reduce((a, b) => a + b, 0);
};

console.log('\nDay 10, part 1: ' + checkSyntax(input));
