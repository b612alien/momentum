const toDoForm = document.getElementById("to-do-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("to-do-list");

let toDos = []; // 배열

// localStorage에서 데이터 불러오기
const savedTodos = JSON.parse(localStorage.getItem('todos'));
if (savedTodos) {
  toDos = savedTodos; // localStorage에 저장된 데이터가 있으면 toDos 배열에 할 일 목록을 복원
  savedTodos.forEach(todo => {
    ShowToDo(todo); // 각 할 일 목록을 화면에 표시
  });
}

function saveToDos(){
    localStorage.setItem('todos', JSON.stringify(toDos)); // JSON.stringify는 모든 것을 문자열로 만듦
}

function ShowToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const btn = document.createElement("button");
    btn.addEventListener("click", deleteToDo);
    btn.innerText = "X";
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);   
}

function deleteToDo(event){
    event.target.parentElement.remove();
    const todo = event.target.previousSibling.innerText;
    toDos = toDos.filter(item => item !== todo); // 삭제한 할 일을 배열에서도 제거
    saveToDos();
}

function SubmitForm(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    console.log(newToDo);
    ShowToDo(newToDo);
    toDos.push(newToDo); // toDos라는 배열에 새로 만든 할 일 push해서 저장
    saveToDos();
    toDoInput.value = "";
}

toDoForm.addEventListener("submit", SubmitForm);
