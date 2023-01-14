var questionArray = [
  (questionOne = {
    questionText: "Who is at the top of the Premier League?",
    answers: ["ManUtd", "ManCity", "Arsenal", "Liverpool"],
    correctAnswer: "Arsenal",
  }),
  (questionTwo = {
    questionText: "Where is Hemel Hempstead",
    answers: ["Hertfordshire", "Devon", "Bedforshire", "Essex"],
    correctAnswer: "Hertfordshire",
  }),
];

var questionsDiv = document.querySelector("#questions");

var questionUl = document.createElement("ul");
var questionLi = document.createElement("li");

questionUl.appendChild(questionLi);
questionLi.innerHTML = "heellloooo";

function displayQuestionsAndAnswers(questionArray) {
  for (var i = 0; i < questionArray.length; i++) {
    questionsDiv.children[0].innerHTML = questionArray[i].questionText;
    questionsDiv.innerHTML = questionArray[i].questionText;
    var questionUl = document.createElement("ul");
    questionsDiv.appendChild(questionUl);
    correctAnswer1 = questionArray[i].correctAnswer;
    for (var j = 0; j < questionArray[i].answers.length; j++) {
      var questionLi = document.createElement("li");
      questionUl.appendChild(questionLi);
      questionLi.innerHTML = questionArray[i].answers[j];
      questionLi.addEventListener("click", function (event) {
        // console.log(event.target.textContent);
        if (event.target.textContent === correctAnswer1) {
          console.log("CORRECT ");
        } else {
          console.log("WRONG");
        }
      });
    }
  }
}
