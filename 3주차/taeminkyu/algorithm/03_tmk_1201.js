// 백준 그리디 알고리즘
// 1201번 "NMK"
// https://www.acmicpc.net/problem/1201

const readFileSyncAddress = "/dev/stdin";

let input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split(" ");

const [N, M, K] = input.map(Number);

// 예외 조건
if (M + K - 1 > N || N > M * K) {
  console.log(-1);
  return;
}

// 답 넣을 배열
const nmk = [];

// M개의 내림차순이 역순으로 정렬
// 4 2 2 => (2, 1) (4, 3)
// 처음 내림차순의 개수는 K개여야 함.
const first = K;
for (let i = first; i > 0; i--) {
  nmk.push(i);
}

// 처음을 제외한 M - 1개의 내림차순 묶음 정렬
// 각 내림차순 묶음의 최대 크기는 K보다 작음.
const restGroup = M - 1;
let restNum = N - first;
let restCnt = restNum % restGroup;

// 각 묶음에 필요한 숫자의 수
let curIdx = first;

for (let i = 0; i < restGroup; i++) {
  let cnt = Math.floor(restNum / restGroup);

  if (restCnt > 0) {
    restCnt--;
    cnt++;
  }

  for (let j = curIdx + cnt; j > curIdx; j--) {
    nmk.push(j);
  }

  curIdx += cnt;
}

console.log(nmk.join(" "));
