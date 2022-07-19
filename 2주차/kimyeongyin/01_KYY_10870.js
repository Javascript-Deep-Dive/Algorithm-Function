const fs = require("fs");
const num = +fs.readFileSync("/dev/stdin").toString().trim(); // 숫자로 변환

// 재귀 함수로 피보나치 수 계산하기
// n번째 피보나치 수: n-1번째 피보나치 수 + n-2번째 피보나치 수
// 0번째 피보나치 수 = 0
// 1번째 피보나치 수 = 1
const getFibonacciNumber = (num) => {
    // 종료지점: num이 0 혹은 1일 때
    // 이 때 재귀함수 호출을 중단하고 각각 0, 1을 return한다.
    if (num === 0) return 0;
    if (num === 1) return 1;
    // n번째 피보나치 수열은 다음과 같이 선언
    return getFibonacciNumber(num - 1) + getFibonacciNumber(num - 2);
};
console.log(getFibonacciNumber(num));
