console.log("===EXERCISE 1===");
let user = {
  name: "John Smith",
  age: 35
};
let userJSON = JSON.stringify(user);
let userAfter = JSON.parse(userJSON);
console.log(userAfter);

console.log("===EXERCISE 2===");
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

console.log( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
}));

console.log("===CLAUDE 1===");
const task = { id: 1, text: "Kupić mleko", done: false };
const json = JSON.stringify(task);
console.log(json);
console.log(typeof json);    

console.log("===CLAUDE 2===");
   const task2 = {
     text: "Kupić mleko",
     done: false,
     toggle() { this.done = !this.done; }
   };

   const saved = JSON.stringify(task2);
   const restored = JSON.parse(saved);
   console.log(restored === task);
   