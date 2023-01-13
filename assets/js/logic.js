var startButton = document.querySelector("#start");
var timer = document.querySelector("#timer");

// A start button that when clicked a timer starts and the first question appears.

// - Questions contain buttons for each answer.

// - When answer is clicked, the next question appears

// - If the answer clicked was incorrect then subtract time from the clock

// - The quiz should end when all questions are answered or the timer reaches 0.

// - When the game ends, it should display their score and give the user the ability to save their initials and their score

// A start button that when clicked a timer starts and the first question appears.

startButton.addEventListener("click", displayAnswers);



// click listen event on button - when clicked - set playQuiz = true

// while playGame = true (){

// <!-- Game starts here -->

// timerCount = 60seconds - countsDown

//   if when clicked === true
//   current score = currentScore + 10
//   display next
//   else{
//       current score = currentScore
//       timer = timer - 10 seconds
//   }

//   if timer === 0{
//       gameOver - display score
//   }

// If (currentScore is higher than highScore){
// currentScore = highScore
// }

// }

//   display questions - answers have click listen events on them

//   if (answer clicked === false) {
//       take 10 secs off the time
//   }
//   else{
//       continue
//   }; -->

// }

