const wordList = [
  "My name is Sahil Pillania and I am a Web Developer. I can make dashing websites in no time.",
  "If you want to achieve something in your life you have to work hard. Hard work always be fruitful for everyone.",
  "This is a test of typing in which you are being tested Whether you can do typing well or not. If not you must practice well and try again and again untill you have learnt typing",
];

const msg = document.getElementById("msg");
const typeWords = document.getElementById("myWords");
const btn = document.getElementById("btn");
// console.log(btn);
let startTime, endTime;
typeWords.disabled = true;
myWords.value = "";

const playGame = () => {
  ranNumber = Math.floor(Math.random() * wordList.length);
  //   console.log(ranNumber);
  msg.innerText = wordList[ranNumber];
  let date = new Date();
  startTime = date.getTime();
  btn.innerText = "Done";
};

const endGame = () => {
  let date = new Date();
  endTime = date.getTime();
  let totalTime = (endTime - startTime) / 1000;
  //   console.log(totalTime);

  let totalStr = typeWords.value;
  let wordCount = wordCounter(totalStr);

  let speed = Math.round((wordCount / totalTime) * 60);
  let finalMsg = " You typed total at " + speed + " words per minutes";
  finalMsg += compareWords(msg.innerText, totalStr);

  msg.innerText = finalMsg;
};

const compareWords = (str1, str2) => {
  let word1 = str1.split(" ");
  let word2 = str2.split(" ");
  let cnt = 0;

  word1.forEach(function (item, index) {
    if (item == word2[index]) {
      cnt++;
    }
  });
  let errorWords = word1.length - cnt;
  return (
    cnt +
    " correct out of " +
    word1.length +
    " words and the total number of error are " +
    errorWords +
    "."
  );
};

const wordCounter = (str) => {
  let response = str.split(" ").length;
  console.log(response);
  return response;
};

btn.addEventListener("click", function () {
  if (this.innerText == "Start") {
    typeWords.disabled = false;
    playGame();
  } else if (this.innerText == "Done") {
    typeWords.disabled = true;
    btn.innerText = "Start";
    endGame();
  }
});
