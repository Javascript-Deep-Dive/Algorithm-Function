//1712 손익분기점

const [a, b, c] = require('fs').readFileSync(0, 'utf8').toString().split(' ').map(Number);

if (b >= c) {
    //손익분기점이 존재하지 않는 경우
    console.log('-1');
}
else {
    console.log(`${bepoint(a, b, c) + 1}`);
    //손익분기점을 넘기는 수를 구해야하므로 1을 더해줌
}
//손익분기점 구하는 함수 정의
function bepoint(a, b, c) {
    return Math.floor(a / (c - b));
    //Math.floor 대신 parseInt로 하면 에러남
}

/*
parseInt()와 Math.floor()의 차이

if(a > 0) => 두 메소드 모두 내림
else if(a < 0) => Math.floor는 내림, parseInt는 올림(소수점 버림)

*/