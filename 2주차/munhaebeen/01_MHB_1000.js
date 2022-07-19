//1000 A+B
const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');

const a = parseInt(inputData[0]);
const b = parseInt(inputData[1]);

console.log(a + b);
/*
2개 이상의 수 입력

* fs.readFileSync()
수 입력 시 fs 모듈을 불러와 readFileSync 함수 사용하여 동기적으로 해당 경로의 파일 전체를 읽어들임

* .toString()
읽어들인 정보는 toString() 함수를 통해 문자열 변환 후 사용

* .split(' ')
입력 받을 수가 2개 이상일 경우 split 함수를 이용하여 배열 형태로 반환

* parseInt(str)
문자열을 숫자로 바꿔줌
*/