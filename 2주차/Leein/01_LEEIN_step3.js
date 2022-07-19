//2739
const fs = require("fs");
const arr = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim();

const num = parseInt(arr);


for (let multipliedBy=1; multipliedBy<=9; multipliedBy++) {
    console.log(`${num} * ${multipliedBy} = ${num*multipliedBy}`)
}



// 10950
const fs = require("fs");
const arr = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

const howMany = arr[0];

for (const nums of arr) {
    let result = 0;
    // 리스트 첫 값이 갯수로 제외시켜준다.
    if (nums !== howMany) {
        nums.split(' ').map((num)=>{result+=parseInt(num)});
        console.log(result);
    }
}



// 8393
const fs = require("fs");
const arr = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim();

const endNum = parseInt(arr);

let result = 0;

for (let changeNum = 1; changeNum <= endNum; changeNum++) {
    result += changeNum;
}

console.log(result)



// 15552
const fs = require("fs");
const arr = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split('\n');

let max = parseInt(arr[0]);
let result = ''

for (let i =1; i<=max; i++) {
    let sumNum = 0
    arr[i].split(' ').map((num)=>(sumNum+=parseInt(num)));
    result += `${sumNum}\n`;
}

console.log(result);



// 2741
const fs = require("fs");
const arr = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim();

const max = parseInt(arr);
let result = '';

for (let i=1; i<=max; i++) {
    result+=`${i}\n`;
}
console.log(result);



// 2742
const fs = require("fs");
const arr = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim();

const max = parseInt(arr);
let result = '';

for (let i=max; i>=1; i--) {
    result+=`${i}\n`;
}
console.log(result);



// 11021
const fs = require("fs");
const arr = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split('\n');

let answer = '';
const max = parseInt(arr[0]);

for (let count=1; count<=max; count++) {
    let sum = 0;
    arr[count].split(' ').map((num)=> sum += parseInt(num) );
    answer += `Case #${count}: ${sum}\n`;
}

console.log(answer);



// 11022
const fs = require("fs");
const arr = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split('\n');

let answer = '';
const max = parseInt(arr[0]);

for (let count=1; count<=max; count++) {
    const bundle = arr[count].split(' ');
    const first = parseInt(bundle[0]);
    const second = parseInt(bundle[1]);

    answer += `Case #${count}: ${first} + ${second} = ${first+second}\n`
}
// Case #1: 1 + 1 = 2

console.log(answer);



// 2438
const fs = require("fs");
const arr = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim();

const max = parseInt(arr);

let result = '';

for (let i=1; i<=max; i++) {
    result += `${"*".repeat(i)}\n`;
}

console.log(result);



// 2439
const fs = require("fs");
const arr = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim();

const max = parseInt(arr);

let result = '';

for (let i=1; i<=max; i++) {
    result += `${' '.repeat(max-i)}${"*".repeat(i)}\n`;
}
console.log(result);



// 10871
const fs = require("fs");
const arr = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split('\n');

const number = parseInt(arr[0].split(' ')[0]);
const criteria = parseInt(arr[0].split(' ')[1]);
const bundle = arr[1].split(' ').map((num)=>parseInt(num));

let result = '';

for ( let i=0; i<number ; i++ ) {
    result += bundle[i]< criteria? `${bundle[i]} ` : '';
}

console.log(result.trim());



// 10952
const arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split('\n');

for (let i = 0; i<arr.length -1; i++) {
    let sum = 0;
    arr[i].split(' ').map((num)=> sum+= +num)
    console.log(sum);
}



// 10951
const arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split('\n');

let result = '';
const count = arr.length

for (let i = 0; i<count; i++) {
    let sum = 0;
    arr[i].split(' ').map((num)=> sum+= +num);
    result += `${sum}\n`;
}

console.log(result);



// 1110
const startNum = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim();

let changingVal = startNum;
let count = 0;
let presentVal = 0

//  num은 문자열
const checkHowManyRoop = (num) => {
    if (+num < 10) {
        return (+num).toString().repeat(2);

    }
    const first = num.charAt(0);
    const second = num.charAt(1);
    const sum = (+first) + (+second)

    if (sum < 10 ) {
        return second + sum;

    } else {
        return second + sum%10;
    }
}

while (+startNum !== +presentVal || +startNum === 0) {
    // 시작값이 영이면 그냥 1
    if (+startNum === 0) {
        count = 1;
        break
    }

    // 한번 연산이 들어감
    presentVal = checkHowManyRoop(changingVal);

    // 연산된 값을 재할당하기 위한 준비
    changingVal = presentVal;

    // 카운트 업
    count++;

    if (count >= 70) {
        break
    }
}

console.log(count);