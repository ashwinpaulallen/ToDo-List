const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

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
    const todo = addForm.add.value.trim();
    if(todo.length) {      
        addToDoTemplate(todo);
        addForm.reset();
    }
});