//   for question in questions object{
//       display question[i]

//       display question[i] value[0]
//       display question[i] value[1]
//       display question[i] value[2]
//       display question[i] value[3]
//   }

// Array of questions, Each question is an object

//   questionArray = [
//       question 1 {
//           answer 1: false
//           answer 2: true
//           answer 3: false
//           answer 4: false
//       },
//       question 2 {
//           answer 1 = false
//           answer 2 = true
//           answer 3 = false
//           answer 4 false
//       },
//       question 3 {
//           answer 1: false
//           answer 2: true
//           answer 3 = false
//           answer 4 false
//       },
//       question 4 {
//           answer 1 = false
//           answer 2 = true
//           answer 3 = false
//           answer 4 false
//       },
//   ]

function displayAnswers() {
  var questionsArray = [
    (questionOne = {
      questionText: "Who is at the top of the Premier League?",
      answers: ["ManUtd", "ManCity", "Arsenal", "Liverpool"],
      correctAnswer: "",
    }),
  ];
  console.log(questionsArray);
  console.log("questionsArray" + questionsArray);
  console.log("questionOne" + questionsArray[0].questionText);
  console.log("questionanswer" + questionsArray[0].answers[2]);
  console.log("questionCorrectAnswer" + questionsArray[0].correctAnswer);
}

// console.log("answer" + questionsArray.questionText);
