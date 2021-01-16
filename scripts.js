const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const addToDoTemplate = todo => {
    
    const html = `
        <li class="list-group-item d-flex justify-content-between align-item-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li> `;

    list.innerHTML += html;
};

addForm.addEventListener('submit', e => {
    e.preventDefault();
    let todos = [];
    const todo = addForm.add.value.trim();
    if (localStorage.getItem('todos')) {
        todos = JSON.parse(localStorage.getItem('todos'));
        todos.push(todo);
    } else {
        todos.push(todo);
    }
    const todoString = JSON.stringify(todos);
    localStorage.setItem('todos', todoString);

    if(todo.length) {      
        addToDoTemplate(todo);
        addForm.reset();
    }
});

list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();

        const delToDO = e.toElement.previousElementSibling.innerHTML;
        let todos = JSON.parse(localStorage.getItem('todos'));

        const filtered = todos.filter(todo => {
            if (todo === delToDO) {
                return false;
            } else {
                return true;
            }
        });
        const todoString = JSON.stringify(filtered);
        console.log(todoString);
        localStorage.setItem('todos', todoString);
    }
});

const filertTODO = term => {
    console.log(term);
    Array.from(list.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.add('filtered'));

    Array.from(list.children)
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('filtered'));
    
};

search.addEventListener('keyup', () => {
    const term = search.value.toLowerCase().trim();
    filertTODO(term);
});


if (localStorage.getItem('todos')) {

    todos = JSON.parse(localStorage.getItem('todos'));
    let html = '';
    todos.forEach(todo => {
        html += `
        <li class="list-group-item d-flex justify-content-between align-item-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li> `;
    });

    list.innerHTML += html;
}