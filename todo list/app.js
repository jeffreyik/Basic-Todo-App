const input = document.querySelector('#input');
const todoBox = document.querySelector('.todo-items');
const addBtn = document.querySelector('#submit');
const noItem = document.querySelector('#no-items');

// add event listener
addBtn.addEventListener('click', add);
todoBox.addEventListener('click', deleteCheck);

function add(e) {
    e.preventDefault();
    // console.log(input.value);
    

    // create todo item
    const todoItem = document.createElement('li');
    todoItem.classList.add('item');

    todoItem.innerHTML = `<h1>${input.value}</h1>`;

    // create todo buttons
    const btnDiv = document.createElement('div');
    btnDiv.classList.add('btn');

    // create delete and done button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete')
    deleteBtn.innerText = 'X';

    const doneBtn = document.createElement('button');
    doneBtn.classList.add('done');
    doneBtn.innerText = 'C';

    // Add delete and done to btnDiv
    btnDiv.appendChild(deleteBtn);
    btnDiv.appendChild(doneBtn);

    // Add delete and done buttons(btnDiv) to todoItem
    todoItem.appendChild(btnDiv);


    // Add todo item to todo box
    todoBox.appendChild(todoItem);
    // noItem.style.display = 'none';

    input.value = "";
    
}

function deleteCheck(e) {
    let target = e.target;
    if(target.classList.contains('delete')) {
        const todo = target.parentElement;
        const todoDiv = todo.parentElement;

        todoDiv.remove();

    } else if (target.classList.contains('done')){
        const todo = target.parentElement;
        const todoDiv = todo.parentElement;
        todoDiv.classList.toggle('completed');
    }
}




