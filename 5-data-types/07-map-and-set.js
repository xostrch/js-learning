console.log("===EXERCISE 1===");
function unique(arr){
    return Array.from(new Set(arr))
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log( unique(values) ); // Hare, Krishna, :-O


console.log("===EXERCISE 2===");
function aclean(array){
    let map = new Map();
    for(let word of array){
        let sorted = word.toLowerCase().split('').sort().join(''); // (*)
        map.set(sorted, word);
    }
    return Array.from(map.values());
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"


console.log("===EXERCISE 3===");
let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");
console.log(keys);


console.log("===CLAUDE 1===");
const tags = ["js", "react", "js", "ts", "react", "js"];
const newTags = Array.from(new Set(tags));
console.log(newTags);


console.log("===CLAUDE 2===");
const maps = new Map();
maps.set(1, "liczba");
maps.set("1", "string");
const obj = {};
obj[1] = "liczba";
obj["1"] = "string";
console.log(maps.size);
console.log(Object.keys(obj).length);