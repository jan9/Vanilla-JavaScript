const body = document.querySelector("body");

const IMG_NUMBER = 5;

function getImage(imgNum) {
  const image = new Image();
  image.src = `Images/${imgNum}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
  // below step needed if you were using API
  //image.addEventListener("loaded",handleImgLoad);
}

function generateRandNum() {
  const number = Math.floor(Math.random()*IMG_NUMBER+1);
  return number;
}

function init() {
  const randNum = generateRandNum();
  getImage(randNum);
}

init();
