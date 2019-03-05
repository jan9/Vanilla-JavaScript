const form = document.querySelector(".js-form"),
      input = form.querySelector("input"),
      greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
      SHOWING_CN = "showing";

function storeName_LS(text) {
  localStorage.setItem(USER_LS,text);
}

function handleSubmit(event) {
  // keeps input in place
  event.preventDefault();
  const currentValue = input.value;
  printGreeting(currentValue);
}

function askForName() {
  // shows the form
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function printGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerHTML=`Hello ${text}`;
  storeName_LS(text);
}

function getName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    // no data found on localStorage
    askForName();
  } else {
    // data found on localStorage
    printGreeting(currentUser);
  }
}

function init() {
  getName();
}
init();
