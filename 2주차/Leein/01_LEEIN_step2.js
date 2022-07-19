// 1330
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);

if (a<b) {
    console.log("<");
} else if (a>b) {
    console.log(">");
} else {
    console.log("==");
}



// 9498
let fs = require('fs');
let input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

if (input>=90) {
    console.log("A");
} else if (input>=80) {
    console.log("B");
} else if (input>=70) {
    console.log("C");
} else if (input>=60) {
    console.log("D");
} else {
    console.log("F");
}



// 2753
let fs = require('fs');
let input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

if (input%400 === 0) {
    console.log(1);
} else if (input%4 === 0 && input%100 !== 0) {
    console.log(1);
} else {
    console.log(0);
}



// 14681
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
    const a = parseInt(input[0]);
    const b = parseInt(input[1]);

    if (a > 0) {
        if (b > 0) {
            console.log(1);
        } else {
            console.log(4);
        }
    } else {
        if (b > 0) {
            console.log(2);
        } else {
            console.log(3);
        }

    }
  process.exit();
});



// 2884
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const h = parseInt(input[0]);
const m = parseInt(input[1]);

if (m>=45) {
    console.log(h, m-45);
} else if (h===0) {
    console.log(23, 60-45+m);
} else {
    console.log(h-1, 60-45+m);
}



// 2884
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const h = parseInt(input[0]);
const m = parseInt(input[1]);

if (m>=45) {
    console.log(h, m-45);
} else if (h===0) {
    console.log(23, 60-45+m);
} else {
    console.log(h-1, 60-45+m);
}



// 2525
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const timeNow = input[0];
const h = parseInt(timeNow.split(' ')[0]);
const m = parseInt(timeNow.split(' ')[1]);
const timeRequired = parseInt(input[1]);


const elapsedHour = parseInt((m + timeRequired)/60);

const futureMin = (m + timeRequired)%60;

console.log((h+elapsedHour)%24, futureMin)



// 2480
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split(' ')

const arr = [];
input.map((word)=>arr.push(parseInt(word)));

let result = [0,0]

for (const num in arr) {
    let index = 0
    let count = 0
    for(let i=0; i<arr.length; i++) {
        if (arr[num] === arr[i]){
            count += 1;
            index = i
        }
    }
    if (result[1] <= count && count !== 1) {
        result[0] = index;
        result[1] = count
    }
}
const finalIndex = result[0];
const finalNum = result[1];

if (finalNum === 3) {
    console.log(10000+arr[finalIndex]*1000)
} else if (finalNum === 2) {
    console.log(1000+arr[finalIndex]*100)
} else {
    console.log(Math.max(...arr)*100)
}