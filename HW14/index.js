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

// ОДЗ for sqrt

if(n % 1 === 0) {
    if(n > 0) {
        for(let i = 1; i <= 100 && i <= Math.sqrt(n); ++i) {
            arrQueue.push(i);
        }
        
        console.log(`Task 3: ${arrQueue.join(" ")}`);
    }
} else {
    console.log('Number isn`t whole')
}

// Task 4

const number = 1;
let flag = true;

if(number % 1 === 0) {
    if(number < 2) {
        console.log(`Error: number should to be more 1`)
    } else {
        for(let i = 2; i < number; ++i) {
            if(number % i === 0) {
                flag = false;
                break;
            } 
        }

        flag ? console.log(`${number} is primary`) : console.log(`${number} isn't primary`);
    }
} else {
    console.log('Number isn`t whole')
}

// Task 5

const number2 = 729;

if(number2 % 1 === 0) {
    if (number2 === 1) {
        console.log(`3^0 === ${number2}`);
    } else if(number2 < 1 || number2 % 3 !== 0) {
        console.log(`3^n !== ${number2}`);
    } else {
        let poor = 0;
        let flagDiv = false;
        
        for (let i = 3; i <= number2; i *= 3) {
            ++poor;
            if(i === number2) {
                flagDiv = true;
                break;
            }
        }
    
        if(flagDiv) {
            console.log(`3^${poor} === ${number2}`);
        } else {
            console.log(`3^n !== ${number2}`);
        }
    }
} else {
    console.log('Number isn`t whole')
}