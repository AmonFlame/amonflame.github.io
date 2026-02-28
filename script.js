const firstNumLocation = document.getElementById("first_num");
const secondNumLocation = document.getElementById("second_num");
let maxResult = 15;
let resultMinus = maxResult - 1;
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let answer = getRandomInt(maxResult);
let firstNum = getRandomInt(resultMinus);
let secondNum = answer - firstNum;
firstNumLocation.textContent = firstNum;
secondNumLocation.textContent = secondNum;
