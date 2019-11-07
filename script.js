// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const header = document.getElementById("header");
const intro = document.getElementById("intro");


start.addEventListener("click", startQuiz);

function startQuiz() {
    start.style.display = "none";
    setTime();
    renderQuestion();
    quiz.style.display = "block";
    header.style.display = "none";
    intro.style.display = "none";
    renderCounter();
    TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

let runningQuestion = 0;
let count = 0;
const questionTime = 15;
var timeleft = 77;
let score = 0;
let TIMER;
let maintimer;
var lastQuestion = questions.length - 1;


// Start timer
function setTime() {

    maintimer = setInterval(function countdown() {
        document.getElementById("Timer").innerHTML = "Time: " + timeleft + " seconds";
        timeleft -= 1;
    }, 1000);
    /*  if (runningQuestion == lastQuestion && count == 15) {
         clearInterval(maintimer);}
      */
};


// render a question
function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choices[0];
    choiceB.innerHTML = q.choices[1];
    choiceC.innerHTML = q.choices[2];
    choiceD.innerHTML = q.choices[3];
    count = 0;
    renderCounter();
}

// counter 
function renderCounter() {
    //load 10 sec timer
    if (count <= questionTime) {
        counter.innerHTML = count;
        count++
    } else {
        count = 0;
        //timeover
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
        } else {
            // reset fro next question
            clearInterval(TIMER);
        }
    }
}

// Check Answer
function checkAnswer(correct) {
    if (correct != questions[runningQuestion].answer) {
        timeleft = timeleft - 15;
    }
    //right
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        // end the quiz and show the score
        clearInterval(maintimer);
        clearInterval(TIMER);
        Rendermodal();
    }
}
//Show score
function Rendermodal() {
    var modal = document.getElementById("ShowScore");
    modal.style.display = "block";
    DisplayScore = document.getElementById("score");
    DisplayScore.innerHTML = timeleft;
    console.log(timeleft);
}

//Store Score
var HighScores = [];

/* function createlist() {
    console.log();
    for (var i = 0; i < 15; i++) {
        var score = JSON.parse(localStorage.getItem("scores"));
        console.log(JSON.parse(localStorage.getItem("scores")))
        var li = document.createElement("li");
        li.textContent = score;
        PastScore.append(li);
        console.log(PastScore);
    }
} */

//submit score and initial to local storage
function GetItem() {
    var storedscore = JSON.parse(localStorage.getItem("scores"));
    console.log(JSON.parse(localStorage.getItem("scores")))
    console.log(localStorage.getItem("scores"))

    if (storedscore !== null) {
        HighScores = storedscore;
        console.log(HighScores);
        console.log(storedscore)
    }
}

function storeScores() {
    localStorage.setItem("scores", JSON.stringify(HighScores));
}

//initials added

const submit_btn = document.getElementById("submit_btn")
const id_initial = document.getElementById("initial");
const ul = document.querySelector('#ul');
const highscorelist_btn = document.getElementById("highscorelist");

submit_btn.onclick = function() {
    var store = {
        initial: id_initial.value.trim(),
        score: score.innerHTML = timeleft
    }
    console.log(store)
    if (store === "") {
        return;
    }
    GetItem();
    console.log(HighScores);
    HighScores.push(store);
    console.log(HighScores)
    storeScores();
}


/*
Home screenSubmit button - on click event
next screens - pop up?
screen 1 - Questions
screen  2 - All done
            - shows final score = time left on count down
            -enter initials and another submit button
Screen 3 - Highscore
            - Show an ordered list of initial and high score
            -Clear high score button and a go back button
            -clear high score will - clear your score.
            go back takes you to home screen.


Home screen - view Highscores link
     */