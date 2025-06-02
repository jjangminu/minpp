let result = document.querySelector("#result");
let user = document.querySelector("#user");
let play = document.querySelector("#play");
let count = document.querySelector("#count");
let hintImg = document.querySelector("#hintImg");
let restart = document.querySelector("#restart");
let inputNum = document.querySelectorAll("#inputNum li");
let answer = document.querySelector("#answer");

//숫자 랜덤 만들기
/* let num = Math.floor(Math.random() * 100 + 1);
console.log(num); */
randomNum();
function randomNum() {
  computerNum = Math.floor(Math.random() * 100 + 1);
}

let countNum = 5;
let inputCount = 0;

user.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    play.click();
  }
});

play.addEventListener("click", () => {
  let userNum = user.value;
  /* 
  if (computerNum > userNum) {
    result.textContent = "up";
  } else if (computerNum < userNum) {
    result.textContent = "Down";
  } else {
    result.textContent = "Bingo";
  } */
 
  //삼향연산자
  computerNum > userNum
    ? ((result.textContent = "Up"), (hintImg.src = "source/game_source/up.png"))
    : computerNum < userNum
    ? ((result.textContent = "Down"),
      (hintImg.src = "source/game_source/down.png"))
    : computerNum == userNum
    ? ((result.textContent = "Bingo"),
      (hintImg.src = "source/game_source/bingo.png"))
    : ((result.textContent = "숫자를 입력하세요"),
      (hintImg.src = "source/game_source/number.png"));

  countNum -= 1;
  count.textContent = countNum;
  if (userNum == "") {
    inputNum[inputCount].textContent = "숫자를 입력하세요";
    result.textContent = "숫자를 입력하세요";
    hintImg.src = "source/game_source/number.png";
  } else if (userNum >= 100 || userNum <= 0) {
    inputNum[inputCount].textContent =
      "1부터 100까지의 숫자 중 하나를 입력하세요";
  } else if (userNum >= 0 && userNum <= 100) {
    inputNum[inputCount].textContent = userNum;
  } else {
    inputNum[inputCount].textContent = "숫자를 입력하세요";
  }
  inputCount += 1;

  if (countNum == 0) {
    if (computerNum == userNum) {
      hintImg.src = "source/game_source/bingo.png";
    } else {
      hintImg.src = "source/game_source/over.png";
    }

    user.readOnly = true;
    play.disabled = true;
    answer.textContent = `정답은 ${computerNum}입니다.`;
  }
});

restart.addEventListener("click", () => {
  user.value = "";
  for (let i = 0; i < inputNum.length; i++) {
    inputNum[i].textContent = "";
  }
  countNum = 5;
  inputCount = 0;
  result.textContent = "Up / Down / Bingo";
  count.textContent = countNum;
  hintImg.src = "source/game_source/ready.png";
  user.readOnly = false;
  play.disabled = false;
  randomNum();
  answer.textContent = "";
});

user.onfocus = () => {
  user.value = "";
};
