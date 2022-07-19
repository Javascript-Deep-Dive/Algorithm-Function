const fs = require('fs');
const score = fs.readFileSync('/dev/stdin');
//const score = parseInt(input);
var grade;
//삼항조건 연산자 이용
//if else문 사용
if ((100 >= score) && (score >= 90)){
    grade = 'A';
} else if((80 <= score) && (score < 90)) {
    grade = 'B';
} else if((70 <= score) && (score < 80)) {
    grade = 'C';
} else if((60 <= score) && (score < 70)) {
    grade = 'D';
}else{
    grade='F'
}
console.log(grade);