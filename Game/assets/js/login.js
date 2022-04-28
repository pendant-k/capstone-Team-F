import { initSockets } from "./sockets";

const body = document.querySelector("body");
const loginForm = document.getElementById("jsLogin");
// const logout = document.getElementById("jsLogout");

const NICKNAME = "nickname";
const LOGGED_OUT = "loggedOut";
const LOGGED_IN = "loggedIn";
const nickname = localStorage.getItem(NICKNAME);

// socket emit setNickname event to server
// window 객체 공부하기 global variable in browsers
const logIn = (nickname) => {
    const socket = io("/");
    socket.emit(window.events.setNickname, { nickname });
    initSockets(socket);
};

// local storage에 nickname 정보가 있는지 check 후 분기시킴
if (nickname === null) {
    body.className = LOGGED_OUT;
} else {
    body.className = LOGGED_IN;
    logIn(nickname);
}

const handleFormSubmit = (e) => {
    e.preventDefault();
    const input = loginForm.querySelector("input");
    const { value } = input;
    console.log(value);
    input.value = "";
    localStorage.setItem(NICKNAME, value);
    body.className = LOGGED_IN;
    // logout.className = LOGGED_IN;
    // socket에 넘겨주기
    logIn(value);
};
if (loginForm) {
    loginForm.addEventListener("submit", handleFormSubmit);
}

const handleLogout = (e) => {
    localStorage.clear();
    location.reload();
};
// if (logout) {
//     const button = document.createElement("button");
//     button.innerText = "로그아웃";
//     button.addEventListener("click", handleLogout);
//     logout.appendChild(button);
// }
