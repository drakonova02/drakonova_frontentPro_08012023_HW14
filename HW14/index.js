// Task 1

const queueNumber = [];

for(let i = 20; i <= 30; i += 0.5) {
    queueNumber.push(i);
}

console.log(queueNumber.join(' '));

// Task 2

const dollar = 27;
const dollarToGrivnia = [];

for(let i = 10; i <= 100; i += 10) {
    dollarToGrivnia.push(`${i} dollars is ${dollar * i} grivnia`);
}

console.log(dollarToGrivnia.join('\n'));

// Task 3

const n = 18;       // number N
const arrQueue = [];

if(n % 1) {
    n.trunc();
}

// ОДЗ for sqrt

if(n > 0) {
    for(let i = 1; i <= 100 && i <= Math.sqrt(n); ++i) {
        arrQueue.push(i);
    }
    
    console.log(`Task 3: ${arrQueue.join(" ")}`);
}

// Task 4

const number = 0;
let flag = true;

if(number % 1) {
    number.trunc();
}

for(let i = 2; i < number; ++i) {
    if(number % i === 0) {
        flag = false;
        break;
    } 
}

flag ? console.log(`${number} is primary`) : console.log(`${number} isn't primary`);

// Task 5

const number2 = 80;

if(number2 % 1) {
    number2.trunc();
}

if(number2 < 1 || number2 % 3 !== 0) {
    console.log(`3^n !== ${number2}`);
} else {
    const poor = (Math.log(number2) / Math.log(3)).toFixed(2);

    if(poor % 1) {
        console.log(`3^n !== ${number2}`);
    } else {
        console.log(`3^${poor} === ${number2}`);
    }
}