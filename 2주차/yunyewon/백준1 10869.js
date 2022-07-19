const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().split(' ');

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(A+B);
console.log(A-B);
console.log(A*B);
console.log(parseInt(A/B));
console.log(A%B);


// const fs = require('fs'); <-node.js의 file system 모듈을 불러온다.
 // fs모듈의 readFileSync 함수: 동기적으로 해당 경로의 파일 전체를 읽어들인다.
// 백준에서는 '/dev/stdin' 경로에 테스트 케이스 파일이 있다.
// toString()함수: 문자열로 변환해준다.
// 입력 받은 문자열을 split() 함수를 통해 배열화한다.
//parseInt(): 부동 숫자를 정수로 변환할때 이용
