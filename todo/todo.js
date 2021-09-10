import { getTodos, addTodo, completeTodo, eraseTodo } from '../local-storage-utils.js';

const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

let todos = getTodos();

if (todos) {
    todos.forEach(todo => renderTodo(todo));
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let todoText = input.value;

    addTodo(todoText);
    todosUL.innerText = '';
    todos = getTodos();
    todos.forEach(todo => renderTodo(todo));
});

function renderTodo(todo) {

    const todoEl = document.createElement('li');
    if (todo && todo.completed) {
        todoEl.classList.add('completed');
    }

    todoEl.innerText = todo.text;

    todoEl.addEventListener('click', () => {
        todoEl.classList.toggle('completed');
        completeTodo(todo.id);
    });

    const button = document.createElement('button');
    button.innerText = 'Remove';

    todoEl.append(button);

    button.addEventListener('click', ()=>{
        todoEl.remove();
        eraseTodo(todo.id);
    });


    todosUL.appendChild(todoEl);

    input.value = '';

    
}


