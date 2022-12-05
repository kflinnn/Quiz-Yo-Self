// //Create variables
var headerText = document.querySelector(".large-font");
var quizDesc = document.querySelector(".quiz-description");
var startButton = document.querySelector(".start-button");
var viewHighScores = document.querySelector(".view-highscores")
var timerEl = document.querySelector(".quiz-timer");
var submitButton = document.querySelector(".submit-button");
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");

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
    submitButton.disabled = true;
}
// //click the start button to begin quiz
startButton.addEventListener("click", startQuiz);

function startQuiz() {
    timerCount = 75;
    startButton.disabled = true;
    pullQuestion();
    startTimer ();
}

// //array of questions and answers
var questions = [
  {question: "What is known as the most basic coding language?",
  answers: [
    "a: CSS",
    "b: JavaScript",
    "c: HTML",
  ],
  correctAnswer: "c"
  },
  {question: "What must you link to your HTML in order to see stylistic changes to the content using CSS?",
  answers: {
    a: "style.css",
    b: "reset.css",
    c: "scipt.js",
  },
  correctAnswer: "b"
  },
  {question: "What element allows you to store groups of data in a single variable?",
  answers: {
    a: "An array",
    b: "An object",
    c: "A function",
  },
  correctAnswer: "a"
  },
  {question: "Which positioning refers to when an element is in normal flow, left to right/top to bottom?",
  answers: {
    a: "Static",
    b: "Fixed",
    c: "Absolute",
  },
  correctAnswer: "a"
  },
  {question: "What symbol is used to concatenate?",
  answers: {
    a: ":",
    b: "=",
    c: "+",
  },
  correctAnswer: "c"
  },
  {question: "What is a global scope?",
  answers: {
    a: "Pertains to one specific function",
    b: "Affects all functions",
    c: "Helps make your site user friendly",
  },
  correctAnswer: "b"
  },
  {question: "Please identify the parent in var changeP = document.getElementById(hero)",
  answers: {
    a: "answer changeP",
    b: "answer document",
    c: "answer hero",
  },
  correctAnswer: "b"
  },
  {question: "Which of the below is the name of a Third Party API?",
  answers: {
    a: "Bootstrap",
    b: "CSS",
    c: "JavaScript",
  },
  correctAnswer: "a"
  },
 ]

// //Function to pull a question
 function pullQuestion () {
  var output = [];
  var answers;

  for (var i=0; i<questions.length; i++){
    answers = [];

  for (letter in questions[i].answers){
    answers.push(
      '<label>'
        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
        + letter + ': '
        + questions[i].answers[letter]
      + '</label>'
    );
  }
  }
  output.push(
    `<div class="question"> ${currentQuestion.question} </div>
    <div class="answers"> ${answers.join('')} </div>`
  );
  quizContainer.innerHTML = output.join("");
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