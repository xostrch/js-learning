console.log("===EXERCISE 1===");

function sumSalaries(salaries){
    return Object.values(salaries).reduce((a,b) => a + b, 0);
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(sumSalaries(salaries));



console.log("===EXERCISE 2===");

function count(user){
    return Object.keys(user).length;
}

let user = {
  name: 'John',
  age: 30
};

console.log( count(user) ); // 2



console.log("===CLAUDE 1===");
const prices = { mleko: 4, chleb: 6, ser: 12 };

function sumPrices(prices){
  return Object.values(prices).reduce((a,b) => a + b, 0);
}

 console.log(sumPrices(prices));



 console.log("===CLAUDE 2===")
//  Napisz sam, trudniejsze: stwórz nowy obiekt z cenami podwojonymi: 
//  { mleko: 8, chleb: 12, ser: 24 }. 
//  Użyj schematu z rozdziału: Object.entries → map → Object.fromEntries.
const entries = Object.entries(prices);
const doubleEntries = entries.map(pair => [pair[0], pair[1] * 2]);
const doublePrices = Object.fromEntries(doubleEntries);
console.log(doublePrices);
