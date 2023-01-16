var startButton = document.querySelector("#start");
var timer = document.querySelector("#time");
var startScreen = document.querySelector("#start-screen");
var questionDiv = document.querySelector("#questions");
var choices = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen");
// ----------------------------------------------------------

// Make a var playQuiz = false
var playQuiz = false;
// Make a var timerCount = 0
var timerCount = 0;
// Make a var Currentscore = 0
var Currentscore;
// Make a var highScore = 0
var highScore;

startTimer = function () {
  var time = setInterval(function () {
    timerCount++;
    timer.innerHTML = timerCount;
  }, 1000);
  return time;
};

// hide the start
function hideStartScreen() {
  return startScreen.classList.add("hide");
}

var answerListItem;
// show the question div
// ----------------------------------------DISPLAY
function displayQuestion(currentQuestion) {
  // Remove the hide class to show div
  questionDiv.classList.remove("hide");

  // current question displayed in questionDiv h2
  for (var i = 0; i < quizArray.length; i++) {
    var answerList = document.createElement("ul");
    questionDiv.children[0].innerHTML = quizArray[currentQuestion].questionText;
  }
  // In choices div - make a unordered list
  questionDiv.children[1].appendChild(answerList);
  // for each answer of the current question
  for (var i = 0; i < quizArray[currentQuestion].answers.length; i++) {
    // Create a list-item and display the answer
    answerListItem = document.createElement("li");
    answerList.appendChild(answerListItem).innerHTML =
      quizArray[currentQuestion].answers[i];
    answerListItem.addEventListener("click", function (event) {
      // if user clicks on right answer
      if (event.target.innerHTML === quizArray[currentQuestion].correctAnswer) {
        console.log("correct");
        // hide the current Question
        questionDiv.classList.add("hide");
        // increase the current question + 1
        currentQuestion++;
        console.log("currentQuestion = " + currentQuestion);
      } else {
        // if user clicks on wrong answer
        console.log("wrong");
        // hide the current Question
        questionDiv.classList.add("hide");
        // increase the current question + 1
        currentQuestion++;
        // increase the timer by 10 seconds
        timerCount = +10;
        console.log("currentQuestion = " + currentQuestion);
      }
    });
  }
}

startButton.addEventListener("click", function () {
  startTimer();
  startScreen.setAttribute("hidden", "hide");
  questionDiv.className = "show";
  currentQuestion = 0;
  displayQuestion(currentQuestion);
});
