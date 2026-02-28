const firstNumLocation = document.getElementById("first_num");
const secondNumLocation = document.getElementById("second_num");
const resultLocation = document.getElementById("result");
const check = document.getElementById("check");
const blockArea1 = document.getElementById("block_area1");
const blockArea2 = document.getElementById("block_area2");
const currentLevel = document.getElementById("level");


let maxResult = Number(currentLevel.value);
let answer;
let firstNum;
let secondNum;

function getRandomInt(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateQuestion() {
  answer = getRandomInt(maxResult, 5);
  firstNum = getRandomInt(answer + 1, 1);
  secondNum = answer - firstNum;

  firstNumLocation.textContent = firstNum;
  secondNumLocation.textContent = secondNum;

  generateBlocks();
}

function generateBlocks() {
  blockArea1.innerHTML = "";
  blockArea2.innerHTML = "";

  for (let i = 0; i < firstNum; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("block");
    blockArea1.appendChild(newDiv);
  }

  for (let i = 0; i < secondNum; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("block");
    blockArea2.appendChild(newDiv);
  }
}

generateQuestion();

check.addEventListener("click", () => {
  if (Number(resultLocation.value) === answer) {
    alert("You did it!");
    resultLocation.value = "";
    generateQuestion();
  } else {
    alert("Try again!");
  }
});
