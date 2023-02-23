"use strict";
// defines data
let number = 0;
window.addEventListener("load", initApp);

function initApp() {
  console.log("App ready");
  document
    .querySelector("#btn-increment")
    .addEventListener("click", incrementNumber);
  document
    .querySelector("#btn-decrement")
    .addEventListener("click", decrementNumber);
}

//updates data

function incrementNumber() {
  number = number + 3;
  displayNumber();
}
function decrementNumber() {
  number = number - 2;
  displayNumber();
}
// updates UI
function displayNumber() {
  document.querySelector("#number").textContent = number;
  let message = "";

  if (number > 10) {
    console.log("Number more than 10");
    message = "Number is above 10!";
  } else if (number == 10) {
    console.log("Number is 10");
    message = "YAAASSS QUEEN - you've hit 10!";
  } else {
    console.log("Number is less than 10");
    message = "Keep smashing those buttons! The number is below 10";
  }

  console.log(message);
  document.querySelector("#message").textContent = message;
}

console.log(23 + 24);
