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

  let message = `Tallet er nu højere end: ${number - 1}`;
  console.log(message);
  document.querySelector("#message").textContent = "Hej";
}
