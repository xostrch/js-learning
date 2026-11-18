let div = document.getElementById('div');
let textarea = document.createElement('textarea');

div.addEventListener('click', () => {
    let text = div.innerHTML;
    textarea.value = text;
    div.replaceWith(textarea);
    textarea.focus();
});

textarea.addEventListener('blur', () => {
    let text = textarea.value;
    div.innerHTML = text;
    textarea.replaceWith(div);
});

textarea.addEventListener('keydown', (event) => {
    if(event.key == 'Enter'){
        textarea.blur();
    }
});