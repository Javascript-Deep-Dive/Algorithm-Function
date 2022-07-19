// 백준 단계별로 풀어보기
// 12단계 집합과 맵
// 1620번 "나는야 포켓몬 마스터 이다솜"
// https://www.acmicpc.net/problem/1620

const readFileSyncAddress = "/dev/stdin";

let input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

// 포켓몬 도감을 위한 Map
const map = new Map();
let answer = "";

// 입력값을 순회하며
// 추후 포켓몬 이름이나 번호로 검색하기 위해.
// 도감에 [key, value] 쌍을 삽입
// [포켓몬 이름, 번호]
// [번호, 포켓몬 이름]
for (let i = 0; i < N; i++) {
  const pokemon = input[i].trimEnd();
  map.set(pokemon, i + 1);
  map.set(i + 1, pokemon);
}

// 찾아야 하는 정보를 순회하며
for (let i = N; i < N + M; i++) {
  const info = input[i];

  // 정보의 첫 번째 글짜가 숫자이면 => 포켓몬 이름을 찾고
  // 숫자가 아니라면 => 번호를 찾음.
  if (Number(info[0]) < 10 && Number(info[0]) > 0) {
    answer += map.get(Number(info)) + "\n";
  } else {
    answer += map.get(info.trimEnd()) + "\n";
  }
}

console.log(answer.trimEnd());
