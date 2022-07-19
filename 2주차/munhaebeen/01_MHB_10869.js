//10869 사칙연산
const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');

const a = parseInt(inputData[0]);
const b = parseInt(inputData[1]);

console.log(a + b);
console.log(a - b);
console.log(a * b);
// javascript에서 a / b는 소수로 출력되기 때문에 정수로 바꾸어 주어야 함
console.log(parseInt(a / b));
console.log(a % b);