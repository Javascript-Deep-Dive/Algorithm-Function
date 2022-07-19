//10818 최소, 최대

const input = require('fs').readFileSync(0, 'utf8').toString().split('\n');
// '\n'로 n과 배열 덩어리 input에 할당

const n = Number(input[0]);
//input 첫 번째 요소는 n
const arrInput = input[1].toString().split(' ').map(Number);
//input 두 번 째 요소는 배열 덩어리
//split(' ')를 이용하여 변수 배열 할당

let Max = arrInput[0];
let Min = arrInput[0];
//배열 끝까지 돌면서 최댓값, 최솟값 갱신하기
for (let i = 1; i < n; i++) {
    if (Max < arrInput[i]) {
        Max = arrInput[i];
    }
    if (Min > arrInput[i]) {
        Min = arrInput[i];
    }
}
console.log(`${Min} ${Max}`);

/*var, let, const 차이

var: 변수 재선언 가능, 재할당 가능
let: 변수 재선언 불가, 재할당 가능
const: 변수 재선언 불가, 재할당 불가
*/
