// 백준 단계별로 풀어보기
// 9단계 재귀
// 17478번 "재귀함수가 뭔가요?"
// https://www.acmicpc.net/problem/17478

const readFileSyncAddress = "/dev/stdin";
let input = require("fs").readFileSync(readFileSyncAddress).toString();

const N = Number(input);

// 문제에서 주어진 응답들.
const question = '"재귀함수가 뭔가요?"\n';
const reply1 =
  '"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.\n';
const reply2 =
  "마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.\n";
const reply3 =
  '그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."\n';
const reply4 = "라고 답변하였지.\n";
const answer = '"재귀함수는 자기 자신을 호출하는 함수라네"\n';

// 결과를 저장할 문자열
// 매번 console.log()를 이용하여 출력하면 시간초과가 발생하기 때문에
// 문자열로 결과를 합치고 한 번에 출력하기 위함.
let result = "어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.\n";

function solution(cnt) {
  // 재귀의 횟수에 따라 필요한 "____"를 추가.
  let dash = "";
  for (let i = 0; i < cnt; i++) dash += "____";

  result += dash + question;

  // 현재 반복횟수에 따라
  // N번 반복했으면 종료이므로 답변 추가 후 리턴.
  // 그렇지 않다면 기본 응답을 결과에 추가하고 카운트를 증가시켜 재귀 호출.
  if (cnt === N) {
    result += dash + answer;
  } else {
    result += dash + reply1;
    result += dash + reply2;
    result += dash + reply3;

    solution(cnt + 1);
  }

  result += dash + reply4;
}

solution(0);

console.log(result);
