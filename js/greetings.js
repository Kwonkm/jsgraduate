const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetingComment = document.querySelector("#greeting");
const greeting = document.querySelector("#name");

const HIDDEN_CLASSNAME = "hidden";
const USENAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USENAME_KEY, username);
    painGreetings(username);
}

function painGreetings(username) {
    greeting.innerText = `${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greetingComment.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USENAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    painGreetings(savedUsername);
}