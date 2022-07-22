

// let x = 'global';

// function foo1() {
//     let x = 'local';
//     console.log(x);
// }
// function foo2() {
//     console.log(x);
// }
// foo1();
// foo2();
// console.log(x);

let x = 1;

function foo() {
    let x = 10;
    bar();
}

// 렉시컬 스코프(정적 스코프)
// 함수가 선언될 시에 자신의 상위 스코프를 결정한다.
function bar() {
    console.log(x);
}

foo();
bar();