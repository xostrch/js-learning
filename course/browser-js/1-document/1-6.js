 let elem = document.querySelector('[data-widget-name]');

console.log(elem.dataset.widgetName);
console.log(elem.getAttribute('data-widget-name'));



let links = document.querySelectorAll('a');

for(let link of links){
    let hrefValue = link.getAttribute('href');
    if(hrefValue && hrefValue.includes('://') && !hrefValue.startsWith('http://internal.com')){
        link.style.color = 'orange'
    }
}

