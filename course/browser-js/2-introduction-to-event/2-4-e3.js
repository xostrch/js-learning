let thumbs = document.getElementById('thumbs');
let bigImg = document.getElementById('largeImg');

thumbs.addEventListener('click', event => {
    let thumb = event.target.closest('a');
    if (!thumb) return;
    event.preventDefault();

    bigImg.src = thumb.href;
});