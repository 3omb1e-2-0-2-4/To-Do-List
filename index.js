const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const toDoContainer = document.querySelector('.toDoContainer');

btn.addEventListener('click', () => {
    const item = document.createElement('li');
    item.innerText = input.value;
    item.classList.add('toDoAdded');
    if (input.value.trim() !== '') {
    toDoContainer.appendChild(item);
    input.value = '';
    }
    
    item.addEventListener('click', () => {
    item.classList.add('toDoCompleted');
    })
    item.addEventListener('dblclick', () => {
        toDoContainer.removeChild(item);
    })
})