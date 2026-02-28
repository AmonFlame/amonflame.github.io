const firstNumLocation = document.getElementById("first_num");
const secondNumLocation = document.getElementById("second_num");
let maxResult = 15;
function getRandomInt(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}
let answer = getRandomInt(maxResult, 0);
let firstNum = getRandomInt(answer + 1, 0);
let secondNum = answer - firstNum;
firstNumLocation.textContent = firstNum;
secondNumLocation.textContent = secondNum;
const resultLocation = document.getElementById("result");
const check = document.getElementById("check");
check.addEventListener("click", () => {
if (Number(resultLocation.value) === answer) {
  alert("You did it!");
} else {
  alert("Try again!");
}
  
}
);
