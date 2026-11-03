    function showNotification({ top = 0, right = 0, html, className }){
        let div = document.createElement('div');
        if(className){
            div.classList.add(className);
        }
        div.style.top = `${top}px`;
        div.style.right = `${right}px`;
        div.classList.add('notification');
        div.innerHTML = html;

        document.body.append(div);
        setTimeout(() => div.remove(), 1500);
    }


    showNotification({ top: 10, right: 10, html: "Hello!", className: "welcome" });