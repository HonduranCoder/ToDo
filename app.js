// import functions and grab DOM elements
import { setUser, getUser } from './local-storage-utils.js';

// initialize global state
const form = document.getElementById('form');
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

//Signin


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    const data = new FormData(form); 
    const userName = data.get('name');
    const userPassword = data.get('password');

    const userData = {
        name: userName, 
        password: userPassword, 
        todo: [],
    };
    setUser(userData);

    window.location = './todo/index.html';
});