let btn = document.getElementById('btn');
btn.onclick = () => {
    let area = document.getElementById('text');
    let box = document.getElementById('box');
    let container = document.getElementById('container');
    let submit = document.getElementById('submit');
    let expands = document.getElementById('expands');
    if (btn.innerText === 'EXPAND') {
        box.style.width = '80%';
        box.style.maxWidth = '600px';
        area.style.width = '100%';
        area.style.height = '90vh';
        area.style.borderRadius = '10px';
        area.style.backgroundColor = 'white';
        container.style.backgroundColor = '#73c673';
        submit.style.display = 'none';
        btn.innerText = 'SHRINK';
        expands.style.backgroundImage = 'url(icons/arrows-shrink_97726.png)';
    } else {
        box.style.width = '30%';
        area.style.width = '100%';
        area.style.height = '30vh';
        btn.innerText = 'EXPAND';
        submit.style.display = 'block';
        area.style.backgroundColor = `rgba(234, 234, 234, 0.56)`;
        container.style.backgroundColor = 'white';
        area.style.borderRadius = '0px';
        expands.style.backgroundImage = 'url(icons/expand_icon-icons.com_63379.png)';
    }
};