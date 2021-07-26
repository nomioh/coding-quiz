var headerEl =  document.querySelector(".header");
var showScoreEl = document.querySelector("#final-score");
var timerEl = document.querySelector("#timer");


var highScoreEl = document.querySelector("#highscore");
var listEl = document.querySelector("#ol");
var scoreResultsEl = document.querySelector("#results");
var choicesEl = document.querySelector("#choices");
var questionsEl = document.querySelector("#questions");
var answerEl = document.querySelector("#answer");
var appEl = document.querySelector(".app");
var chartEl =document.querySelector("chart");
var submitBtn =document.querySelector("#submit");
var initialsEl = document.querySelector("#initials");
// # : ref an id
// . : Ref a class

var currentQuestionsIndex = 0;
var time = questions.length * 10;
var timerId;

//showScoreEl.addEventListener('click', showScoreEl);
//headerEl.appendChild(showScoreEl);
//headerEl.appendChild(timerEl);

function startQuiz () {
    var startPageEl = document.getElementById("onboarding");
    startPageEl.setAttribute("class", "hide");

    questionsEl.removeAttribute("class");

    // timer
    timerId = setInterval(clock, 1000);
    timerId = textContent = time;

    getQuestions();
}
function getQuestion() {
    var currentQuestions = questions[currentQuestionIndex];

    // gets new question title
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestions.title;

    choicesEl.innerHTML = "";

    currentQuestions.choices.forEach(function(choices, i) {
        var choicesNode = document.createElement("button");
        choicesNode.setAttribute("class", "choices");
        choicesNode.setAttribute("value", choices);
        choicesNode.textContent = i + 1 + ". " + choices;

        choicesNode.onclick = questionsClick; 

        choicesEl.appendChild(choicesNode);
    
    });
}

function questionsClick () {
    // if answered incorrectly
    if (this.value !== questions[currentQuestionIndex].answer) {
        time -= 10;

        if (time < 0) {
            time = 0;
        }
        timerEl.textContent = time;
        chartEl.textContent ="Incorrect answer!";
    } else {
        feedbackEl.textContent = "Correct answer!";
    }
        
}

// questions and answers 
let questions = [
    {
        question: "Commonly used data types do NOT include:",
        choices: {
            1: "alerts", 
            2: "booleans", 
            3:"numbers", 
            4: "strings"
        },
        answer: "1",
    },
    {
         question: "The condition in an if/else statment is inclosed with ___.",
        choices: {
                1: "quotes", 
                2: "curly brackets", 
                3:"parentheses", 
                4: "square brackets"
        },
         answer: "3",
    },
    {
        question: "Arrays in JavaScript must be enclosed within ___ when being assigned to variables.",
        choices: {
            1: "numbers and strings",
            2: "other arrays",
            3: "booleans",
            4: "all of above",
        },
        answer: "4",
    },
    {
        question: "String variables must be encloed within ____ when being assigned to variables.",
        choices: {
            1: "commas",
            2: "quotes",
            3: "curly brackets",
            4: "parentheses",
        },
        answer: "2",
    },
];

function printHighscores() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    var listEl = document.getElementById("highscores");
    listEl.appendChild(listEl);
} 

function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}

document.getElementById("clear").onclick = clearHighscores;


function SaveHighscore() {
    var initials = initialsEl.nodeValue.trim();

    if (initials == "") {
        var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    var newScore = {
        score:timer,
        initials:initials
    };
    //save initals to local storage
    highscores.push(newscore);
    window.localStorage.setItem("highcores", JSON.stringify(highscores));

    window.location.href ="highscore.html";
    }
}

function checkForEnter(event) {
    if (event.key === "Enter") {
        SaveHighscore();
    }
}
// Event listener 
submitScore.addEventListener("click", saveScore);

// submit initials 
submitBtn.onclick = SaveHighscore;

// start 
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;

printHighscores();