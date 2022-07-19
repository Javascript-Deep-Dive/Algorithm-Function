const fs = require("fs");
const num = +fs.readFileSync("dev/stdin").toString().trim(); // 받아와서 +로 숫자로 변환

// 문제: n! 구하기
// 두 가지 해결 방법이 있습니다.
// 반복문을 사용할 경우 효율이 좋지만 코드 가독성이 좋지 않으며
// 재귀함수를 사용할 경우 효율이 좋지 않지만 코드 가독싱이 좋습니다.

// 코드 1: 재귀를 사용하지 않고 반복문 사용
const getFactorial = (num) => {
    if (num === 0) return 1; // 0! = 1 이므로 예외 처리
    // 이외의 경우 곱을 쌓아나갈 변수 result
    let result = 1;
    for (let i = 1; i <= num; i++) {
        // i를 1씩 증가시켜가며 result에 곱함
        result *= i;
    }
    // 최종 팩토리얼 결과값을 return
    return result;
};
console.log(getFactorial(num));

// 코드 2: 재귀함수로 구현하기
// 선언적 방식 + 종료지점 선택이 중요
const getFactorial = (num) => {
    // 종료 지점: num이 1(혹은 0)
    if (num <= 1) return 1;
    // num! = num * (num-1)! 구조의 반복
    // num이 1씩 줄어가며 재귀적으로 자기 자신(getFactorial)을 호출하고 이에 현재 num을 곱함
    return num * getFactorial(num - 1);
};
console.log(getFactorial(num));
