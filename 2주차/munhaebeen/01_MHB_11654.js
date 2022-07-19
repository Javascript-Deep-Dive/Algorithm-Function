
//11654 아스키 코드

const input = require('fs').readFileSync(0, 'utf8').toString().trim();

const result = input.charCodeAt();
console.log(result);
/*
charCodeAt()

주어진 인덱스에 대한 UTF-16 코드를 나타내는 0 ~ 65535 사이의 정수 반환
*/
