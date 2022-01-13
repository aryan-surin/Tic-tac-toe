"use strict";
const container = document.querySelector(".container");
const boxe = document.querySelector(".boxes-container");
const line = document.querySelector(".line");
const head = document.querySelector(".center-div");
let turn = "X";
let order = [];

////////BOX INPUTING DYNAMICALLY////////
const createBoxes = function () {
  for (let i = 1; i <= 9; i++) {
    // console.log(i);

    let bo = document.createElement("div");
    bo.classList.add("boxes");
    bo.setAttribute("id", i);
    // boxe.append(bo);
    boxe.append(bo);
    order.push(bo);
    // bo.innerHTML = "O";
  }
};
createBoxes();

// console.log(order[1]);

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
    result();
  });
};
displayText();

//////////////////////////////

function result() {
  let wins = [
    [0, 1, 2, 0, 6, 0],
    [3, 4, 5, 0, 18, 0],
    [6, 7, 8, 0, 30, 0],
    [0, 3, 6, -12, 18, 90],
    [1, 4, 7, 0, 18, 90],
    [2, 5, 8, 12, 18, 90],
    [0, 4, 8, 0, 18, 45],
    [2, 4, 6, 0, 18, -45],
  ];

  // console.log(el);
  // console.log(order[0].innerText);
  wins.forEach((e) => {
    // console.log(e[0], e[1], e[2]);
    if (
      order[e[0]].innerText === order[e[1]].innerText &&
      order[e[1]].innerText === order[e[2]].innerText &&
      order[e[0]].innerText !== ""
    ) {
      // let res = order[e[0]].innerText;
      // winner.innerText = ` ${res} is the winner`;
      console.log("WINNER");
      line.style.width = "100%";
      line.style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
    }
  });
}

/////////to refres///////

head.addEventListener("dblclick", () => {
  window.location.reload("Refresh");
});
