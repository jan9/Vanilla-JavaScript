# Topic: JS DOM (Document Object Module) Functions
## < Modifying the DOM with Js >
> assuming there is a #title function in my css file, the following are possible using my JS stylesheet. The JS stylesheet has to be added before I close the body in html.

* HTML representation of the document:
> console.log(document);
> console.dir(document);

* Accessing a certain object:
> const title = document.getElementById("title");
> const title = document.querySelector("#title");

* Modifying a certain object's attribute:
> title.innerHTML = "This is from index.js";
> title.style.color = "red";
> document.title = "Studying JS DOM Functions";

# Useful resource:
## https://developer.mozilla.org/en-US/docs/Web/Events

# Topic: Handling an event >
## < handling window resizing
> function handleResize() {
  console.log("I have been resized")
}


## < handling an event >
> function handleResize(event) {
  console.log(event)
}

## This will call the function when the event is observed
> window.addEventListener("resize", handleResize);

## This will call the function immediately
> window.addEventListener("resize", handleResize());

> function handleClick() {
    title.style.color = "black";
}
> title.addEventListener("click", handleClick)

> const title = document.querySelector("#title");

> const BASE_COLOR  = "red";
> const OTHER_COLOR = "black";
> function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
};
> function init() {
    title.style.color = BASE_COLOR;
    //title.addEventListener("click", handleClick)
    title.addEventListener("mouse", handleClick)
  }
> init();

## This will check is the user has wifi access
> function handleonline() {
  console.log("wifi is on");
}
> window.addEventListener("online",handleonline);
