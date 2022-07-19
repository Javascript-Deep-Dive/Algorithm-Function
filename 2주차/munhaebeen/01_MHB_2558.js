//2558 곱셈
const fs = require('fs');
const [a, b] = fs.readFileSync(0, 'utf8').toString().split('\n').map(Number);


const tmp1 = a * (b % 10);
const tmp2 = a * (parseInt(b % 100 / 10));
const tmp3 = a * (parseInt(b / 100));
// %, / 연산자를 이용하여 b 일의 자리부터 백의 자리 새로운 변수에 각각 할당
const ans = tmp1 + tmp2 * 10 + tmp3 * 100;

console.log(`${tmp1}\n${tmp2}\n${tmp3}\n${ans}`);