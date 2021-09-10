
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

}

export function setTodos(){

}

export function addTodo(){

}

export function completeTodo(){

}