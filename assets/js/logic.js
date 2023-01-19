// start screen and timer
var startButton = document.querySelector("#start");
var startScreen = document.querySelector(".start");
var timer = document.querySelector("#time");

// question div
var questionDiv = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var choicesList = document.createElement("ul");

// validation div
var validationDisplayDiv = document.createElement("div");
questionDiv.append(validationDisplayDiv);
validationDisplayDiv.classList.add("validation");
var validationText = document.createElement("p");
validationDisplayDiv.append(validationText);
// sounds

// End Screen
var endScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");
var submitButton = document.querySelector("#submit");

var highScore = 0;
var currentQuestion = 0;
var timerCount = 60;
timer.innerHTML = timerCount;
// --- set timer 60 seconds
function startTimer() {
  timerCount--;
  timer.innerHTML = timerCount;
  outOfTime();
}

function outOfTime() {
  if (timerCount <= 0) {
    questionDiv.classList.add("hide");
    timerCount++;
    timer.innerHTML = 0;
    displayEndScreen(0);
  }
}
function displayQuestion(currentQuestion) {
  questionTitle.innerText = "";
  choicesList.innerText = "";
  validationText.innerText = " ";
  // display the question
  questionTitle.innerText = quizArray[currentQuestion].question;
  //   make a unordered list - for the choices
  choices.appendChild(choicesList);

  for (var i = 0; i < quizArray[currentQuestion].choices.length; i++) {
    console.log("iiiiii" + i);
    // for each choice create a list item
    var choice = document.createElement("button");
    // display each choice on each list item
    choicesList.appendChild(choice).innerText =
      quizArray[currentQuestion].choices[i];
  }
}
checkAnswer(currentQuestion);
function checkAnswer(currentQuestion) {
  // match the click to the answer
  choicesList.addEventListener("click", function (event) {
    if (event.target.innerText === quizArray[currentQuestion].answer) {
      validationText.innerText = "Correct";
    } else {
      timerCount = timerCount - 10;
      validationText.innerText = "Wrong";
    }
    if (currentQuestion === quizArray.length - 1) {
      questionDiv.classList.add("hide");
      var score = timer.innerHTML;
      setTimeout(function () {
        displayEndScreen(score);
      }, 300);
    } else {
      currentQuestion++;
      setTimeout(function () {
        displayQuestion(currentQuestion);
      }, 300);
    }
  });
}

function startQuiz() {
  // hide screen and set score to 0
  startScreen.classList.add("hide");
  currentQuestion = 0;
}

startButton.addEventListener("click", function () {
  startQuiz();
  countDown = setInterval(startTimer, 1000);
  questionDiv.classList.remove("hide");
  displayQuestion(currentQuestion);
});

// End Screen
function displayEndScreen(score) {
  // show the end screen
  endScreen.classList.remove("hide");
  // display the score
  finalScore.innerText = score;
}
