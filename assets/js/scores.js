// DISPLAY THE HIGHSCORES
var highscoresList = document.querySelector("#highscores");
var initials = localStorage.getItem("initials");
var score = localStorage.getItem("score");

// Make an empty array
highScoresArray = [];
// Get the localStorage data push to the highScoresArray
for (var i = 0; i < localStorage.length; i++) {
  var initals = localStorage.key(i);
  var score = localStorage.getItem(initals);
  highScoresArray.push({ initals, score });
}

// Sort the highScorsArray, highest to lowest value
var highScoresSorted = highScoresArray.sort((a, b) => {
  return b.score - a.score;
});

// Display the hightscores by creating list items and adding the text
for (var i = 0; i < highScoresSorted.length; i++) {
  var highScoreLi = document.createElement("li");
  highscoresList.append(highScoreLi);
  highScoreLi.textContent =
    highScoresSorted[i].initals + " - " + highScoresSorted[i].score;
}

// CLEAR THE HIGHSCORES
var clearButton = document.querySelector("#clear");

clearButton.addEventListener("click", function () {
  highscoresList.classList.add("hide");
  localStorage.clear();
});
