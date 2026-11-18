container.onclick = function(event){
    if(event.target.className != 'remove-button') return;
    let pane = event.target.closest('.pane');
    pane.remove();
}


for(let li of document.querySelectorAll('li')){
    let span = document.createElement('span');
    li.prepend(span);
    span.append(span.nextSibling);
}

tree.onclick = function(event) {
    if(event.target.tagName != 'SPAN') return;
    let childrenContainer = event.target.parentNode.querySelector('ul');
    if(!childrenContainer) return;
    childrenContainer.hidden = !childrenContainer.hidden
}

const table = document.getElementById('grid');

table.addEventListener('click', (event) => {
    if(event.target.tagName !== 'TH') return;
    const th = event.target;
    const columnIndex = th.cellIndex;
    const type = th.dataset.type;

    const tbody = table.tBodies[0];
    const rows = Array.from(tbody.rows);

    rows.sort((rowA, rowB) => {
        const a = rowA.cells[columnIndex].textContent;
        const b = rowB.cells[columnIndex].textContent;

        if (type === 'number'){
            return Number(a) - Number(b);
        }

        return a.localeCompare(b);

    });

    for (const row of rows) {
        tbody.append(row);
    }
});