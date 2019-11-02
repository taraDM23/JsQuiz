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
    renderQuestion();
    quiz.style.display = "block";
    header.style.display = "none";
    intro.style.display = "none";
    renderCounter();
    setTime();
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

// check Answer
function checkAnswer(answer) {
    if (answer != questions[runningQuestion].correct) {
        timeleft = timeleft - 10;
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

submit_initial.addEventListener("click", function (store) {
    var store = {
        initial: id_initial.value.trim(),
        score: score.innerHTML = timeleft
    }
    console.log(store)
    var storage = localStorage.getItem("store");
    console.log(storage)
  
    // get stored data
        const li = document.createElement('li');
        li.textContent = 
        ul.appendChild(li);


    storage.push(store);
    localStorage.setItem("store", JSON.stringify(storage));
    console.log(localStorage.getItem("store"));
});

 




//Go to Home
//location.reload()

//view highscore 

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


Home screen - view Highscores link -
     */
