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

var questions = [{
    question: "Question 1: Why is this so hard:",
    option: ["1: ping", "2: pong", "3: paddle", "4: pool"],
    correct: 0
}, {
    question: "Question 2: I wish I had a lot of money",
    option: ["1: why!!?", "2: so poor", "3: need", "4: money"],
    correct: 3
}, {
    question: "Question 3: No no no no no no no",
    option: ["1: stick", "2: to the", "3: stuff you", "4: know"],
    correct: 1
}, {
    question: "Question 4: Potatos are awesome",
    option: ["1: chips", "2: mashed", "3: wedges", "4: roast"],
    correct: 1
}, {
    question: "Question 5: What are JavaScript Cookies?",
    option: ["1: js stored in a computer when the user visits the websites to store information", "2: Cookies made with flour, eggs and HTML", "3: Chocolate", "4: Test files stored in a computer when the user visits the websites to store information"],
    correct: 3
}]

start.addEventListener("click", startQuiz);

function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    header.style.display = "none";
    intro.style.display = "none";
    renderCounter();
    setTime();
    //displayResult()
    TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

let runningQuestion = 0;
let count = 0;
const questionTime = 10;
var timeleft = 75;
let score = 0;
let TIMER;
let maintimer;
var lastQuestion = questions.length - 1;
var selectOptions = [];

// Start timer
function setTime() {

    maintimer = setInterval(function function1() {

        document.getElementById("Timer").innerHTML = "Time: " + timeleft + " seconds";
        timeleft -= 1;

    }, 1000);
};


// render a question
function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.option[0];
    choiceB.innerHTML = q.option[1];
    choiceC.innerHTML = q.option[2];
    choiceD.innerHTML = q.option[3];
}

// counter render
function renderCounter() {
    if (count <= questionTime) {
        counter.innerHTML = count;
        count++
    } else {
        count = 0;
        // change progress color to red
        //answerIsWrong();
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
        } else {
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer
function checkAnswer(answer) {
    if (answer != questions[runningQuestion].correct) {
        timeleft = timeleft - 10;
    }
    count = 0;
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

function Rendermodal() {
    var modal = document.getElementById("ShowScore");
    modal.style.display = "block";
    score = document.getElementById("score");
    score.innerHTML = timeleft;
    console.log(timeleft);
}

//submit score and initial to local storage
const submit_initial = document.getElementById("submit_initial")
const id_initial = document.getElementById("initial")
score = document.getElementById("score")

submit_initial.addEventListener("click", function(store) {
    var store = {
        initial: id_initial.value.trim(),
        score: score.innerHTML = timeleft
    }
    console.log(store)
})
localStorage.setItem("store", JSON.stringify(store));

// get stored data



//Go to Home
//location.reload()


//view highscore

/*
Home screen  Submit button - on click event
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


Home screen - view Highscores link -
     */