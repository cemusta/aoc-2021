import { input, sample } from "./inputs/input3";

type findCommonBitFunction = (arr: Array<string>, index: number) => 1 | 0;

export const findMostCommonBit =( arr: Array<string>, index: number ): 1 | 0 => {
    let count = arr.map( str=> Number(str[index])).reduce((a,b)=>a+b);

    if(count >= arr.length / 2) {
        return 1;
    }

    return 0;
};

export const findLeastCommonBit =( arr: Array<string>, index: number ): 1 | 0 => {
    let count = arr.map( str=> Number(str[index])).reduce((a,b)=>a+b);

    if(count < arr.length / 2) {
        return 1;
    }

    return 0;
};

export const CalculateRates = ( inputString: string ) => {
    
    const binaries = inputString.split('\n');

    const gammaArr = [];
    const epsilonArr = [];

    for(let i = 0; i < binaries[0].length; i++) {
        gammaArr.push(findMostCommonBit(binaries, i));
        epsilonArr.push(findLeastCommonBit(binaries, i));
    }

    const gammaRate = gammaArr.map(val=>val.toString(2)).join('');
    const epsilonRate = epsilonArr.map(val=>val.toString(2)).join('');

    return [parseInt(gammaRate,2), parseInt(epsilonRate,2)];
}

const [gR, eR] = CalculateRates(input);
console.log('day3, part1: ', gR*eR);

export const CalculateLifeSupport = ( inputString: string, func: findCommonBitFunction ) => {
    let binaries = inputString.split('\n');

    let index = 0;

    while(true) {
        let common = func(binaries, index);
        
        binaries = binaries.filter(str=>str[index] === common.toString());

        console.log(binaries.length);

        index++;
        index = index % binaries[0].length;

        if(binaries.length === 1) { break;}
    }

    console.log('   ' + binaries[0])

    return parseInt(binaries[0], 2);
}

const ox = CalculateLifeSupport(input, findMostCommonBit);
const co = CalculateLifeSupport(input, findLeastCommonBit);
console.log('day3, part2: ', ox, co, (ox * co));

