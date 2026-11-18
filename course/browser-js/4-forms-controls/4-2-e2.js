const table = document.getElementById('bagua-table');
let editingTd = null;
let originalHTML = '';
let btnOK = document.createElement('button');
let btnCANCEL = document.createElement('button');
btnOK.classList.add('edit-ok');
btnCANCEL.classList.add('edit-cancel');
btnOK.textContent = 'OK'
btnCANCEL.textContent = 'CANCEL';

table.addEventListener('click', (event) => {
    if (event.target.classList.contains('edit-ok')) {
        const textarea = editingTd.querySelector('textarea');
        editingTd.innerHTML = textarea.value;       
        editingTd = null;               
        return;
    }

    if (event.target.classList.contains('edit-cancel')) {
        editingTd.innerHTML = originalHTML;       
        editingTd = null;               
        return;
    }


    const td = event.target.closest('td');
    if (!td) return
    if (editingTd) return;
    // 1. zapamiętaj td w editingTd i jego innerHTML w originalHTML
    editingTd = td;
    originalHTML = td.innerHTML;
    // 2. stwórz textarea, wstaw do jej value oryginalny HTML
    const textarea = document.createElement('textarea');
    textarea.value = originalHTML;
    // 3. wyczyść zawartość td i wstaw do niego textarea
    td.innerHTML = "";
    td.append(textarea);
    td.append(btnOK);
    td.append(btnCANCEL);
    // 4. ustaw focus na textarea
    textarea.focus();
});