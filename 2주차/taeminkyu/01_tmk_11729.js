// 백준 단계별로 풀어보기
// 9단계 재귀
// 11729번 "하노이 탑 이동 순서"
// https://www.acmicpc.net/problem/11729
//
const readFileSyncAddress = "/dev/stdin";
let input = require("fs").readFileSync(readFileSyncAddress).toString();

const N = Number(input);
let answer = "";
let cnt = 0;

// 하노이탑 규칙
// 시작점의 가장 아래의 원판을 목적지로 옮기기
// hanoi(현재 개수, 시작점, 도착점, 경유점)

// 3단계 재귀로 구성
// 1. 시작점의 가장 아래 원판을 제외한 나머지 원소(n - 1)
//    개의 원판을 경유점으로 옮김.
// 2. 시작점의 가장 아래 원판을 도착점으로 옮김.
// 3. 경유점에 옮겨 둔 나머지 원판들을 도착점으로 옮김 (n - 1)

// hanoi(현재 개수, 시작점, 도착점, 경유점)
function hanoi(n, start, dest, via) {
  // 몇 번 이동했는지 확인하기 위한 count 변수
  cnt++;

  // 탈출 조건
  // 옮겨야 하는 것이 하나
  if (n === 1) {
    answer += `${start} ${dest}\n`;
    return;
  }

  // 3단계로 구성
  hanoi(n - 1, start, via, dest);
  answer += `${start} ${dest}\n`;
  hanoi(n - 1, via, dest, start);
}

hanoi(N, 1, 3, 2);

console.log(cnt + "\n" + answer.trimEnd());
