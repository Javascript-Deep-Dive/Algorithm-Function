//1978 소수 찾기

const input = require('fs').readFileSync(0, 'utf8').toString().split('\n');

const n = Number(input[0]);
let numArr = input[1].toString().split(' ').map(Number);

let flag = false;//flag는 현재 수의 소수여부를 가리킴(boolean 타입)
let cnt = 0;
for (let j = 0; j < n; j++) {
    flag = false;
    //2이하일 경우 안의 for문 조건에 위배되기 때문에 따로 정의
    if (numArr[j] < 2) {
        continue;
    }
    if (numArr[j] == 2) {
        cnt++;
        continue;
    }
    for (let i = 2; i < numArr[j]; i++) {
        if (numArr[j] % i === 0) {
            flag = true;
            //if(flag == true) => 자기자신말고 나누어 떨어지는 수가 있기 때문에 소수가 아님
            break;
        }
    }
    if (flag == false) {
        //소수가 맞을 경우 cnt 증가
        cnt++;
    }
}

console.log(cnt);
