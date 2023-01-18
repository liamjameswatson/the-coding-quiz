var startScreen = document.querySelector(".start");
var questionDiv = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var choicesList = document.createElement("ul");

var highScore = 0;
var score = 0;
var currentQuestion = 0;

function displayQuestion(currentQuestion) {
  console.log("displaying question..." + currentQuestion);
  // display the question
  questionTitle.innerText = quizArray[currentQuestion].question;
  //   make a unordered list - for the choices
  choices.appendChild(choicesList);

  for (var i = 0; i < quizArray[currentQuestion].choices.length; i++) {
    // for each choice create a list item
    var choice = document.createElement("li");
    // display each choice on each list item
    choicesList.appendChild(choice).innerText =
      quizArray[currentQuestion].choices[i];
  }
  checkAnswer(currentQuestion);
}

function startQuiz() {
  // hide screen and set score to 0
  startScreen.classList.add("hide");
  score = 0;
  currentQuestion = 0;
}

function checkAnswer(currentQuestion) {
  console.log("checking question..." + currentQuestion);
  // match the click to the answer
  choicesList.addEventListener("click", function (event) {
    console.log(event.target.innerText);
    questionTitle.innerText = "";
    choicesList.innerText = "";
    if (event.target.innerText === quizArray[currentQuestion].answer) {
      console.log("correct " + currentQuestion);
      //   clear inner text
      //   currentQuestion++
      currentQuestion++;
      score = +10;
      console.log(score);
      //   display next question
    } else {
      // if user clicks on wrong answer
      console.log("wrong");

      // increase the current question + 1
      currentQuestion++;
      // increase the timer by 10 seconds
      timerCount = +10;
      console.log("currentQuestion = " + currentQuestion);
    }
    displayQuestion(currentQuestion);
  });
}

startQuiz();
questionDiv.classList.remove("hide");
displayQuestion(currentQuestion);

console.log(quizArray[0].choices.length);
