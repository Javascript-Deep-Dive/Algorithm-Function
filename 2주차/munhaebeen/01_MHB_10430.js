//10430 나머지
const fs = require('fs');
const [a, b, c] = fs.readFileSync(0, 'utf8').toString().split(' ').map(Number);
//구조분해할당 이용하여 a, b, c 세 수 입력받음
//map(Number) => 배열에 접근하여 문자열을 숫자로 변환 후 다시 반환

console.log(`${(a + b) % c}\n${((a % c) + (b % c)) % c}\n${(a * b) % c}\n${((a % c) * (b % c)) % c}`);

/*
Number, parseInt 차이

*소수일 경우
NUmber(str) => 소수점 그대로 가지고 있음
parseInt(str) => 소수점 버림
*/

/*
구조분해할당

배열 혹은 객체에서 각각 값이나 프로퍼티를 분해하여 변수에 담을 수 있도록 하는 방법
ex)
let [a, b] = [10, 20];
console.log(a); //10
console.log(b); //20
=> 10, 20의 값이 각각 a, b에 할당됨
*/