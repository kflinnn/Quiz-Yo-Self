// //Create variables
var headerText = document.querySelector(".large-font");
var quizDesc = document.querySelector(".quiz-description");
var startButton = document.querySelector(".start-button");
var viewHighScores = document.querySelector(".view-highscores")
var timerEl = document.querySelector(".quiz-timer");

var timer;
var timerCount;

// console.log(headerText)
// console.log(quizDesc)
// console.log(startButton)
// console.log(viewHighScores)
// console.log(timerEl)

// //init function ?
function init() {
    timerCount = 0; 
}
// //click the start button to begin quiz
startButton.addEventListener("click", startQuiz);

function startQuiz() {
    timerCount = 75;
    startButton.disabled = true;
    //pullQuestion();
    startTimer ();
}



// //timer starts and presented with question
// function startTimer() {
//     timer = setInterval(function () {
//         timerEl.textContent = timerCount;
//         if (timerCount > 0) {
//             pullQuestion();

//         }
//         if (timerCount === 0) {
//             clearInterval(timer);
            
//         }
//     }, 1000);
// }

function startTimer() {
    timerCount = 75;
    timer = setInterval(function () {
      if (timerCount > 0) {
        timerEl.textContent = "Time: " + timerCount;
        timerCount--;
        //pullQuestion();
      } else if (timerCount === 1){
        timerEl.textContent = timerCount;
        timerCount--;
      } else {
        timerEl.textContent = 0
        clearInterval (timer);
      }
       
    }, 1000);
}

// //the user selects an answer

// //correct answer brings about another question

// //incorrect question subtracts time from the clock

// //Game ends when all questions are answered or the timer reaches 0

// //User can save their initials and score

// //User is presented with high score list