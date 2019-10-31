
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const counter = document.getElementById("counter");

var questions = [
    {
        title: "Question 1 Whats the best fruit?",
        option: ["Apple", "Ball", "Cat", "Dog"],
        answer: 1
    },
    {
        title: "Question 2 muhahahaah:",
        option: ["AA", "BB", "CC", "DD"],
        answer: 3
    },
    {
        title: "Question 3 all the silly:",
        option: ["ping", "pong", "bong", "bing"],
        answer: 0
    }
]

const lastQuestion = questions.length - 1;
let LoadQuestion = 0;
const questionTime = 15;
let TIMER;
var timeleft = 75;
let score = 0;
let q = questions[LoadQuestion];
var selectOptions = [];

function showQuestion() {
    var body = document.getElementById("quiz");

    //create elements
    var Title = document.createElement("div");
    var listEl = document.createElement("ol");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");

    //show via array

    Title.innerHTML = "<p>" + q.title + "</p>";
    li1.innerHTML = q.option[0];
    li2.innerHTML = q.option[1];
    li3.innerHTML = q.option[2];
    li4.innerHTML = q.option[3];

    body.appendChild(Title);
    Title.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);

    li1.addEventListener("click", checkAnswer())
    li2.addEventListener("click", checkAnswer())
    li3.addEventListener("click", checkAnswer())
    li4.addEventListener("click", checkAnswer())

    function checkAnswer() {
        for (var i = 0; i < questions.length; i++) {
            if (response == questions[i].answer) {
                score++;
                alert("Correct!");
            } else {
                alert("WRONG!");
            }
        }
    }
}

start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
    start.style.display = "none";
    showQuestion();
    setTime();
    quiz.style.display = "block";
    //checkAnswer(q.answer);
    //renderCounter();
    //TIMER = setInterval(renderCounter, 1000);
}

function setTime() {

    setInterval(function function1() {

        document.getElementById("Timer").innerHTML = "Time remaining: " + timeleft + " seconds";
        timeleft -= 1;

    }, 1000);
};



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
