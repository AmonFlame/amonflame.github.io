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

  generateBlocks();
}

generateQuestion(); // initial question

const blockArea1 = document.getElementById("block_area1");
const blockArea2 = document.getElementById("block_area2");

function generateBlocks() {

  blockArea1.innerHTML = "";
  blockArea2.innerHTML = "";

  const firstNum = Number(firstNumLocation.textContent);
  const secondNum = Number(secondNumLocation.textContent);

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


check.addEventListener("click", () => {
  if (Number(resultLocation.value) === answer) {
    alert("You did it!");
    
    resultLocation.value = "";   // clear input
    generateQuestion();          // new numbers
  } else {
    alert("Try again!");
  }
});
