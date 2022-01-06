"use strict";
const container = document.querySelector(".container");
const boxe = document.querySelector(".boxes-container");
let turn = "X";
let order = [];


////////BOX INPUTING DYNAMICALLY////////
const createBoxes = function () {
  for (let i = 1; i <= 9; i++) {
    // console.log(i);

    let bo = document.createElement("div");
    bo.classList.add("boxes");

    // boxe.append(bo);
    let sq = boxe.append(bo);
    order.push(bo);
  }
};
createBoxes();

console.log(order);

/////TO DISPLAY THE 'X' & 'O'///////////
const turnText = function () {
  return turn === "X" ? "O" : "X";
};

const displayText = function () {
  boxe.addEventListener("click", function (e) {
    let curr = e.target;
    // console.log(curr);
    if (curr.innerText === "") {
      curr.innerText = turn;
      turn = turnText();
    }
  });
};
displayText();
