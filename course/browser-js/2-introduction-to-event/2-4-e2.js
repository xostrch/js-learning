let contents = document.getElementById('contents');


contents.addEventListener('click', event =>{
    let link = event.target.closest('a');
    if (!link) return;

    let answer = confirm(`Are you sure want to go to ${link}?`)
    if(!answer){
        event.preventDefault();
    }
})