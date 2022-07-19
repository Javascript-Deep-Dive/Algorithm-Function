//10926 ??!
const fs = require('fs');
const inputString = fs.readFileSync(0, 'utf8').toString().trim();
//trim() => 문자열 양 끝의 공백 제거 (안 쓰면 오류남)

console.log(`${inputString}??!`);