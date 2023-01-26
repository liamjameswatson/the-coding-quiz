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
function playCorrect() {
  var correctSound = new Audio("./assets/sfx/correct.wav");
  correctSound.play();
}

function playWrong() {
  var incorrectSound = new Audio("./assets/sfx/incorrect.wav");
  incorrectSound.play();
}

// End Screen
var endScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");
// var initials = document.querySelector("#initials").value;
var submitButton = document.querySelector("#submit");

var currentQuestion = 0;
var timerCount = 120;
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
      validationText.innerText =
        "Correct -- " + quizArray[currentQuestion].fullAnswer;
      playCorrect();
    } else {
      timerCount = timerCount - 10;
      validationText.innerText =
        "Wrong -- " + quizArray[currentQuestion].fullAnswer;
      playWrong();
    }
    if (currentQuestion === quizArray.length - 1) {
      questionDiv.classList.add("hide");
      setTimeout(function () {
        displayEndScreen();
      }, 300);
    } else {
      currentQuestion++;
      setTimeout(function () {
        displayQuestion(currentQuestion);
      }, 800);
    }
  });
}

startButton.addEventListener("click", function () {
  startScreen.classList.add("hide");
  currentQuestion = 0;
  questionDiv.classList.remove("hide");
  countDown = setInterval(startTimer, 1000);
  displayQuestion(currentQuestion);
});

// End Screen
function displayEndScreen() {
  // stop the timer
  clearInterval(countDown);
  // set the score to be the timer
  var score = timer.innerHTML;
  // show the end screen
  endScreen.classList.remove("hide");
  // display the score
  finalScore.innerText = score;
  submitButton.addEventListener("click", function (event) {
    var userInitials = initials.value;
    console.log("initials... " + userInitials);
    console.log("score... " + score);
    localStorage.setItem(userInitials, score);
    location.href = "highscores.html";
  });
}
