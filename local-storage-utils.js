
export const USER = 'USER';

export function getUser(){
    const userOne = localStorage.getItem(USER); 

    const finalUser = JSON.parse(userOne); 

    return finalUser;
}

export function setUser(user){
    const setPerson = JSON.stringify(user);
    localStorage.setItem(USER, setPerson);
}

export function getTodos(){
    const user = getUser();
    return user.todo;
}

export function setTodos(todosArray){
    const user = getUser();  
    user.todo = todosArray;
    setUser(user);
}

export function addTodo(todoText){
    const todos = getTodos();
    const userTodo = {
        id: Math.ceil(Math.random() * 10000), 
        text: todoText, 
        completed: false,
    };
    todos.push(userTodo);
    setTodos(todos);
}

export function completeTodo(id){
    const todos = getTodos();
    for (let todo of todos){
        if (todo.id === id){
            todo.completed = true;
        }
    }
    setTodos(todos);
}

export function eraseTodo(id){
    const todos = getTodos(); 
    for (let i = 0; i < todos.length; i++){
        if (todos[i].id === id){
            todos.splice(i, 1);
        }
    }
    setTodos(todos);
}