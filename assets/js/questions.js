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

function displayQuestionsAndAnswers(questionArray) {
  for (var i = 0; i < questionArray.length; i++) {
    console.log(questionArray[i].questionText);
    console.log("------------------------------------");
    for (var j = 0; j < questionArray[i].answers.length; j++) {
      console.log(questionArray[i].answers[j]);
    }
    console.log("#####################################");
  }
}

displayQuestionsAndAnswers(questionArray);
