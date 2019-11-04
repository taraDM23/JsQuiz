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
var timeleft = 75;
let score = 0;
let TIMER;
let maintimer;
var lastQuestion = questions.length - 1;


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
    choiceA.innerHTML = q.choices[0];
    choiceB.innerHTML = q.choices[1];
    choiceC.innerHTML = q.choices[2];
    choiceD.innerHTML = q.choices[3];
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
//Show score
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
    var ul = document.querySelector('ul');
        
    const li = document.createElement('li');
        li.textContent = 
        ul.appendChild(li);

 // get stored data
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


Home screen - view Highscores link 
     */
