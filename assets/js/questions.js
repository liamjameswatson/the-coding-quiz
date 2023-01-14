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
    console.log(questionArray[i].questionText);
    questionsDiv.innerHTML = questionArray[i].questionText;
    var questionUl = document.createElement("ul");
    questionsDiv.appendChild(questionUl);

    console.log("------------------------------------");
    for (var j = 0; j < questionArray[i].answers.length; j++) {
      console.log(questionArray[i].answers[j]);
      var questionLi = document.createElement("li");
      questionUl.appendChild(questionLi);
      questionLi.innerHTML = questionArray[i].answers[j];
    }
    console.log("#####################################");
  }
}
