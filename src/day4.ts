import { sample, input } from "./inputs/input4";

type BingoBox = {
    number: number;
    checked: boolean;
}

export const runBingo =  ( inputString: string ) => {
    const inputs = inputString.split('\n\n');
    let bingoNumbers = inputs.shift().split(',').map(Number);

    // console.log(bingoNumbers);
    // console.log(inputs);

    let boards = inputs.map(boardInput => new BingoBoard(boardInput));

    let pickedNumber = -1;

    while(true) {
        pickedNumber = bingoNumbers.shift();

        boards.forEach(board => board.checkNumber(pickedNumber));

        console.log('. -> ', pickedNumber);
        boards.some(board => board.isBingo()) && console.log(`BINGO!`);

        if(bingoNumbers.length === 0 || boards.some(board => board.isBingo())) {
            break;
        }
    }

    let winner = boards.find(board => board.isBingo());

    console.log(winner)

    console.log(winner.toString());

    console.log(pickedNumber * winner.getSumOfUncheckedNumbers())

    return [pickedNumber, winner.getSumOfUncheckedNumbers()];
}

class BingoBoard {
    private bingoBoard: BingoBox[][]

    constructor(boardInput: string) {
        this.bingoBoard = boardInput.split('\n')
            .map(x=>x.trim().replace(/ {2}/g, ' ')
            .split(' ').map(num => ({number: Number(num), checked: false}))) 
    }

    public checkNumber(number: number) {
        this.bingoBoard.forEach(row => {
            row.forEach(box => {
                if(box.number === number)
                    box.checked = true;
            });
        });
    }

    public isBingo() {
        if( this.bingoBoard.some(row => row.every(box => box.checked)) )
            return true;

        for(let i = 0; i < 5; i++) {
            if( this.bingoBoard.every(row => row[i].checked) )
                return true;
        }

        return false;
    }

    public toString() {
        return this.bingoBoard.map(x=>x.map(y=> this.numberFormat(y) ).join(' ')).join('\n');
    }

    private numberFormat(bingoBox: BingoBox) {
        if(bingoBox.checked)
            return '**';

        return bingoBox.number < 10 ? ' ' + bingoBox.number : bingoBox.number;
    }

    public getSumOfUncheckedNumbers() {
        return this.bingoBoard.reduce((acc, row) => {
            return acc + row.filter(box => !box.checked)
                .map(box => box.number)
                .reduce((acc2, num) => acc2 + num, 0);
        }, 0);
    }
}

runBingo(input);