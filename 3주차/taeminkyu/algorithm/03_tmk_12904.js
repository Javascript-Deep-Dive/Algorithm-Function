// 백준 그리디 알고리즘
// 12904번 "A와 B"
// https://www.acmicpc.net/problem/12904

const readFileSyncAddress = "/dev/stdin";

let input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

// 시작 : 문자열
let start = input[0].trimEnd();
// 목표 : 배열
let dest = input[1].split("");

// 목표(dest)를 뒤에서부터 확인하면서
// 'A', 'B'에 수행해야 할 연산을 실행하면
// 시작(start)가 나올 수 있는지 확인할 수 있음.

for (let i = dest.length - 1; i >= 0; i--) {
  // start => dest 로 변환 가능
  // 종료
  if (start === dest.join("")) {
    console.log(1);
    return;
  }

  // dest 의 마지막 원소를 pop
  const cur = dest.pop();

  // cur === 'A' 일 경우
  // 단순히 추가한 것이기 때문에 pop()으로 제거하면 완료.
  // cur === 'B' 일 경우
  // 남아있는 dest 배열을 뒤집어 줘야 함.
  if (cur === "B") {
    dest = dest.reverse();
  }
}

// 위 조건을 만족하지 못한 경우
// start => dest 로 변환 불가
console.log(0);
