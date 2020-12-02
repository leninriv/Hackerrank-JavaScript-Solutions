'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function sumArray(arr) {
    let suma = 0;
    arr.forEach(number => {
        suma = suma + Number(number)
    })
    return suma;
}

// Complete the digitSum function below.
function superDigit(n, k) {
    const numberP = n.toString();
    const numberArray = ("" + numberP).split("")
    let sum = k * sumArray(numberArray);
    do {
        sum = sumArray(("" + sum).split(""))
    }
    while ((sum.toString()).length > 1)
    return sum
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = nk[0];

    const k = parseInt(nk[1], 10);

    const result = superDigit(n, k);

    ws.write(result + '\n');

    ws.end();
}
