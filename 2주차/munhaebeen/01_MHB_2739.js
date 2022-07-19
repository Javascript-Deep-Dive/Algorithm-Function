//2739 구구단
const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().split('\n');
const n = Number(input[0]);

for (let i = 1; i <= 9; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
}