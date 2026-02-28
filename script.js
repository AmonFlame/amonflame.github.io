const firstNumLocation = document.getElementById("first_num");
const secondNumLocation = document.getElementById("second_num");
let maxResult = 15;
let resultMinus = maxResult - 1;
function getRandomInt(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}
let answer = getRandomInt(maxResult, 0);
let firstNum = getRandomInt(resultMinus, 0);
let secondNum = answer - firstNum;
firstNumLocation.textContent = firstNum;
secondNumLocation.textContent = secondNum;
