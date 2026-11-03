//=== JS EXERCISE 1

// function clear(elem){
//     document.body.remove(elem);
// }

// let elem = document.getElementById('elem');

//clear(elem);

//=== JS EXERCISE 2

//let data = prompt("Enter the text for the list item", "");
//let ul = document.createElement('ul')
//let li = document.createElement('li');
//li.textContent = data; //without
//ul.append(li);

//document.body.append(ul);

//=== JS EXERCISE 3
function createTree(container, data){
    if(Object.keys(data).length == 0) return;
    let ul = document.createElement('ul');
    for(let elem in data){
        let li = document.createElement('li');
        li.textContent = elem;
        ul.append(li);
        createTree(li, data[elem]);
    }
    container.append(ul);
}



let data = {
  "Fish": {
    "trout": {},
    "salmon": {}
  },

  "Tree": {
    "Huge": {
      "sequoia": {},
      "oak": {}
    },
    "Flowering": {
      "apple tree": {},
      "magnolia": {}
    }
  }
};

let container = document.getElementById('container');
createTree(container, data);




//=== JS EXERCISE 4
let items = document.querySelectorAll('li');

for (const li of items) {
  const count = li.querySelectorAll('li').length;

  if (count === 0) continue; 

  li.firstChild.data += `[${count}]`;
}