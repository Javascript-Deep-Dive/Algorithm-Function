// 2557
console.log("Hello World!")



// 10718
for (let i=0; i<2; i++) {
    console.log("강한친구 대한육군")
}



// 10171
console.log("\\    /\\")
console.log(" )  ( ')")
console.log("(  /  )")
console.log(" \\(__)|")



// 10172
console.log("|\\_/|")
console.log("|q p|   /}")
console.log('( 0 )"""\\')
console.log('|"^"`    |')
console.log("||_/=\\\\__|")



// 1000
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let result = 0;
input.map((each) => {
    let value = parseInt(each);
    result += value;
})
console.log(result)



// 1001
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let a = parseInt(input[0]);
let b = parseInt(input[1]);

console.log(a-b)



// 10998
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let a = parseInt(input[0]);
let b = parseInt(input[1]);

console.log(a*b)


// 1008
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let a = parseInt(input[0]);
let b = parseInt(input[1]);

console.log(a/b)
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let a = parseInt(input[0]);
let b = parseInt(input[1]);

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(parseInt(a/b))
console.log(a%b)



// 10869
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let a = parseInt(input[0]);
let b = parseInt(input[1]);

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(parseInt(a/b))
console.log(a%b)



// 10926
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
// const input = "joonas"
console.log(input + "??!");



// 18108
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

console.log(parseInt(input)-543)



// 10430
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const [A,B,C] = input.map((value)=>parseInt(value))
console.log((A+B)%C)
console.log(((A%C) + (B%C))%C)
console.log((A*B)%C)
console.log(((A%C) * (B%C))%C)



// 2588
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const first = parseInt(input[0].trim());
const second = parseInt(input[1].trim());

let result = 0;
let mul = 0;
for (let i=2; i>=0; i--){
    let num = parseInt(second.toString().charAt(i))
    console.log(first*num)
    let add = first*num
    if (mul !== 0) {
        add = add*(10**mul)
    }
    mul++
    result += add;
}
console.log(result);



// 25083
console.log(`         ,r'"7`)
console.log("r`-_   ,'  ,/")
console.log(` \\. ". L_r'`)
console.log("   `~\\/")
console.log("      |")
console.log("      |")
