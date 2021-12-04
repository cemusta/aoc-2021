import { input } from './inputs/input4';

type BingoBox = {
  number: number;
  checked: boolean;
};

class BingoBoard {
  private bingoBoard: BingoBox[][];

  constructor(boardInput: string) {
    this.bingoBoard = boardInput.split('\n').map((x) =>
      x
        .trim()
        .replace(/ {2}/g, ' ')
        .split(' ')
        .map((num) => ({ number: Number(num), checked: false })),
    );
  }

  public checkNumber(number: number) {
    this.bingoBoard.forEach((row) => {
      row.forEach((box) => {
        if (box.number === number) box.checked = true;
      });
    });
  }

  public isBingo() {
    if (this.bingoBoard.some((row) => row.every((box) => box.checked))) return true;

    for (let i = 0; i < 5; i++) {
      if (this.bingoBoard.every((row) => row[i].checked)) return true;
    }

    return false;
  }

  public toString() {
    return this.bingoBoard.map((x) => x.map((y) => this.numberFormat(y)).join(' ')).join('\n');
  }

  private numberFormat(bingoBox: BingoBox) {
    if (bingoBox.checked) return '**';

    return bingoBox.number < 10 ? ' ' + bingoBox.number : bingoBox.number;
  }

  public getSumOfUncheckedNumbers() {
    return this.bingoBoard.reduce((acc, row) => {
      return (
        acc +
        row
          .filter((box) => !box.checked)
          .map((box) => box.number)
          .reduce((acc2, num) => acc2 + num, 0)
      );
    }, 0);
  }
}

export const runBingo = (inputString: string) => {
  const inputs = inputString.split('\n\n');
  let bingoNumbers = inputs.shift().split(',').map(Number);

  let boards = inputs.map((boardInput) => new BingoBoard(boardInput));

  let pickedNumber = -1;

  let winners = [];

  while (true) {
    pickedNumber = bingoNumbers.shift();

    boards.forEach((board) => board.checkNumber(pickedNumber));

    console.log('. -> ', pickedNumber);
    if (boards.some((board) => board.isBingo())) {
      console.log(`BINGO!`);
      winners.push({
        pickedNumber,
        number: boards.find((board) => board.isBingo()).getSumOfUncheckedNumbers(),
      });
      boards = boards.filter((board) => !board.isBingo());
    }

    if (bingoNumbers.length === 0 || boards.length === 0) {
      break;
    }
  }

  console.log(winners);

  console.log('first winner score', winners[0].pickedNumber * winners[0].number);
  console.log(
    'last winner score',
    winners[winners.length - 1].pickedNumber * winners[winners.length - 1].number,
  );
  return winners;
};

runBingo(input);
