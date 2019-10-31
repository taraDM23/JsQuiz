
//Home Page submit
function startQuiz() {
    setTime();
    questions();
};
document.getElementById("submit").addEventListener("click", startQuiz);

//Hide start button
function Visibility() {
    document.getElementById("submit").style.visibility = "hidden";
};

//Timer //entire quiz

var timeleft = 75;
var LoadTimer = 0;
var quesTimer = 15; //per question

function setTime() {

    setInterval(function function1() {

        document.getElementById("Timer").innerHTML = "Time remaining: " + timeleft + " seconds";
        timeleft -= 1;

    }, 1000);
};

//Create page
function questions() {
var body = document.getElementById("quiz");
var Title = document.createElement("div");
var listEl = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

//Render Questions.

Title.textContent = $('<p>').append(QuesFile().questions.tile);
li1.textContent = "";
li2.textContent = "";
li3.textContent = "";
li4.textContent = "";


body.appendChild(Title);
Title.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

}

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
