console.log("===EXERCISE 1===");
let user = {
  name: "John",
  years: 30
};

let {name, years: age, isAdmin = false} = user;

console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); // false



console.log("===EXERCISE 2===");

function topSalary(salaries){
    let maxSalary = 0;
    let maxName = null;

    for(const [name, salary] of Object.entries(salaries)){
        if(maxSalary <= salary){
            maxSalary = salary;
            maxName = name;
        }
    }
    return maxName;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(topSalary(salaries));



console.log("===CLAUDE 1===");
const prices = { mleko: 4, chleb: 6, ser: 12 };
const entries = Object.entries(prices);

const doubleEntries = entries.map(([name, price]) => [name, price * 2]);
const plusOneEntries = entries.map(([name, price]) => [name, price + 1]);
console.log(plusOneEntries);


console.log("===CLAUDE 2===");
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b);



console.log("===CLAUDE 3===");
const task = { id: 1, text: "Kupić mleko" };
const {text: title, done = false} = task;
console.log(title, done);


console.log("===CLAUDE 4===");
function describeTask({text: title, done = false}) {
    const status = done ? "zrobione" : "do zrobienia";
    return `${title} (${status})`;
}

console.log(describeTask({ text: "Kupić mleko", done: false }));