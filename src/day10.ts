import { input, sample } from './inputs/input10';

const syntaxErrorScore: { [key: string]: number } = {
  ')': 3,
  ']': 57,
  '}': 1197,
  '>': 25137,
};

const reverseSymbol: { [key: string]: string } = {
  '(': ')',
  '[': ']',
  '{': '}',
  '<': '>',
};

const autoCompleteScore: { [key: string]: number } = {
  ')': 1,
  ']': 2,
  '}': 3,
  '>': 4,
};

export const checkChunks = (chunks: string): [number, string] => {
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
    let autocomplete = stack.reduceRight((acc, curr) => acc + reverseSymbol[curr], '');
    return [0, autocomplete]; // incomplete
  }
  return [1, '']; // valid
};

export const calculateAutocomplateScore = (chars: string) =>
  chars.split('').reduce((acc, curr) => {
    return acc * 5 + autoCompleteScore[curr];
  }, 0);

export const checkSyntax = (inputString: string) => {
  const chunks = inputString.split('\n');
  const results = chunks.map((chunk) => checkChunks(chunk));
  const chars = results.filter((result) => result[0] === -1).map((result) => result[1][0]);
  return chars.map((char: string) => syntaxErrorScore[char]).reduce((a, b) => a + b, 0);
};

export const doAutocomplete = (inputString: string) => {
  const chunks = inputString.split('\n');
  const results = chunks.map((chunk) => checkChunks(chunk));
  const chars = results
    .filter((result) => result[0] === 0)
    .map((result) => calculateAutocomplateScore(result[1]))
    .sort((a, b) => b - a);

  return chars[Math.floor(chars.length / 2)];
};

console.log('\nDay 10, part 1: ' + checkSyntax(input));
console.log('\nDay 10, part 2: ' + doAutocomplete(input));
