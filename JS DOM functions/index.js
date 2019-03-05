const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  /* toggle executes all the codes commented out
  const currentClass = title.className;
  const hasClass = title.classList.contains(CLICKED_CLASS);
  //if (currentClass !== CLICKED_CLASS) {
  if (hasClass) {
    //title.className = CLICKED_CLASS;
    title.classList.remove(CLICKED_CLASS);
  } else {
    //title.className = "";
    title.classList.add(CLICKED_CLASS);
  }
  */
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}
init();
