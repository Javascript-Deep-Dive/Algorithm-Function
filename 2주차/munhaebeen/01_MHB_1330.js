//1330 두 수 비교하기
const fs = require('fs');
const [a, b] = fs.readFileSync(0, 'utf8').toString().split(' ').map(Number);

if (a < b) {
    console.log('<');
}
else if (a > b) {
    console.log('>');
}
else {
    console.log('==');
}