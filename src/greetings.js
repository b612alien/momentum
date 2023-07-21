const loginForm = document.querySelector("#login-form");
const button = loginForm.querySelector("button");
const usernameInput = loginForm.querySelector("input"); // 아이디 입력란을 찾음
const greeting = document.querySelector("#greeting");

const HIDDEN = "hidden";
loginForm.classList.remove(HIDDEN);
greeting.classList.add(HIDDEN);

function onLoginBtnClick(event) {
    event.preventDefault();
    const username = usernameInput.value; // 아이디 입력란의 값 가져오기
    console.log(username);
    greeting.innerText = `Hello, ${username}`;

    localStorage.setItem("username", username);

    loginForm.classList.add(HIDDEN);
    greeting.classList.remove(HIDDEN);
}


if(localStorage.getItem("username")){
    greeting.classList.remove(HIDDEN);
    loginForm.classList.add(HIDDEN);
    const username = localStorage.getItem("username");
    greeting.innerText = `Hello, ${username}`;
}

else{
    loginForm.addEventListener("submit", onLoginBtnClick);
}

