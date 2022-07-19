const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().split(' ');
var kind;
const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);
//if else문 사용
if (A > B){
    kind = '>';
} else if(A < B) {
    kind = '<';
} else{
    kind='=='
}
console.log(kind);