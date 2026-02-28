const firstNumLocation = document.getElementById("first_num");
const secondNumLocation = document.getElementById("second_num");
const resultLocation = document.getElementById("result");
const check = document.getElementById("check");

let maxResult = 15;
let answer;

function getRandomInt(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateQuestion() {
  answer = getRandomInt(maxResult, 5);
  let firstNum = getRandomInt(answer + 1, 1);
  let secondNum = answer - firstNum;

  firstNumLocation.textContent = firstNum;
  secondNumLocation.textContent = secondNum;
}

generateQuestion(); // initial question

check.addEventListener("click", () => {
  if (Number(resultLocation.value) === answer) {
    alert("You did it!");
    
    resultLocation.value = "";   // clear input
    generateQuestion();          // new numbers
  } else {
    alert("Try again!");
  }
});
