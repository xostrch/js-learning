let items = document.querySelectorAll('li');

for(let li of items){
    let count = li.querySelectorAll('li').length;
    let text = li.firstChild.data.trim();
    console.log(`${text} : ${count}`);
}

console.log("==============")

console.log(document.body.lastChild.nodeType);
