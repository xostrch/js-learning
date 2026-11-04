//======EXERCISE 1=======

// let button = document.getElementById('hider');
// let div = document.getElementById('text');

// button.addEventListener('click', () =>  {
//     div.hidden = true;
// })


//======EXERCISE 2=======
function expand(){
    if(allSpans[0].classList == 'hidden'){
        allSpans[1].classList.add('hidden')
        allSpans[0].classList.remove('hidden')
        list.hidden = true;
    }else{
        allSpans[0].classList.add('hidden')
        allSpans[1].classList.remove('hidden')
        list.hidden = false;
    }
}

let allSpans = document.querySelectorAll('span');
let list = document.getElementById('ul');


//======EXERCISE 3=======
let allMsg = document.querySelectorAll('.pane');
for(let msg of allMsg){
    let btn = document.createElement('button');
    btn.textContent = '[x]';
    btn.classList.add('remove-button');
    btn.addEventListener('click', () => {
       msg.remove() 
    });
    msg.append(btn);
}