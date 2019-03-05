const toDoForm = document.querySelector(".js-todoForm"),
      toDoInput = toDoForm.querySelector("input"),
      todoList = document.querySelector(".js-todoList");

const TODOS_LS = 'toDos';

let toDoArr = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  todoList.removeChild(li);
  const cleanToDos = toDoArr.filter(function(toDo){
    // parseINT changes strings to numbers
    return toDo.id !== parseInt(li.id);
  });
  toDoArr = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDoArr));
}

function printToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click",deleteToDo);
  const span = document.createElement("span");
  const newID = toDoArr.length + 1;
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newID;
  todoList.appendChild(li);
  const todoObj = {
    text: text,
    id: newID
  };
  toDoArr.push (todoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  printToDo(currentValue);
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      printToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit",handleSubmit);
}

init();
