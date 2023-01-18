var startButton = document.querySelector("#start");
var startScreen = document.querySelector(".start");
var timer = document.querySelector("#time");
var questionDiv = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var choicesList = document.createElement("ul");

var highScore = 0;
var score = 0;
var currentQuestion = 0;

// --- set timer 60 seconds
var timerCount = 60;
timer.innerText = timerCount;
startTimer = function () {
  var time = setInterval(function () {
    timerCount--;
    timer.innerHTML = timerCount;
  }, 1000);
  return time;
};

function displayQuestion(currentQuestion) {
  // display the question
  questionTitle.innerText = quizArray[currentQuestion].question;
  //   make a unordered list - for the choices
  choices.appendChild(choicesList);

  for (var i = 0; i < quizArray[currentQuestion].choices.length; i++) {
    console.log("iiiiii" + i);
    // for each choice create a list item
    var choice = document.createElement("li");
    // display each choice on each list item
    choicesList.appendChild(choice).innerText =
      quizArray[currentQuestion].choices[i];
  }
}
checkAnswer(currentQuestion);
function checkAnswer(currentQuestion) {
  // match the click to the answer
  choicesList.addEventListener("click", function (event) {
    // console.log(event.target.innerText);
    questionTitle.innerText = "";
    choicesList.innerText = "";
    if (event.target.innerText === quizArray[currentQuestion].answer) {
      score = score + 10;
      // console.log(score);
    } else {
      console.log("wrong");
      timerCount = timerCount - 10;
    }
    console.log("currentQuestion..." + currentQuestion);
    console.log("quiz array..." + (quizArray.length - 1));
    console.log("Score..." + score);
    if (currentQuestion === quizArray.length - 1) {
      console.log("game over");
    } else {
      currentQuestion++;
      displayQuestion(currentQuestion);
    }
  });
}

function startQuiz() {
  // hide screen and set score to 0
  startScreen.classList.add("hide");
  score = 0;
  currentQuestion = 0;
}

startButton.addEventListener("click", function () {
  startQuiz();
  startTimer();
  questionDiv.classList.remove("hide");
  displayQuestion(currentQuestion);
});
