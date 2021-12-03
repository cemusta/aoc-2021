import { input } from "./inputs/input3";

export const CalculateRates = ( inputString: string ) => {
    
    const binaries = inputString.split('\n');
    let bitCounts = new Array(binaries[0].length).fill(0);

    for(let binary of binaries) {
        // console.log(binary);
        for(let [i, bit] of binary.split('').entries()) {   
           if(bit === '1') {
            bitCounts[i]++;
           }
        }   
    }

    const gammaRate = bitCounts.map((val)=> {  
        if(val >= binaries.length / 2) {
            return 1;
        }
        return 0;
    }).map(val=>val.toString(2)).join('');

    const epsilonRate = bitCounts.map((val)=> {  
        if(val >= binaries.length / 2) {
            return 0;
        }
        return 1;
    }).map(val=>val.toString(2)).join('');

    // console.log( parseInt(gammaRate, 2), parseInt(epsilonRate, 2))

    return [gammaRate, epsilonRate];
}

const [gR, eR] = CalculateRates(input);
console.log('day3, part1: ', parseInt(gR,2)*parseInt(eR,2));
