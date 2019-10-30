
//Home Page submit 

function startQuiz() {
   setTime();
 questions();
 }
document.getElementById("submit").addEventListener("click", startQuiz);


//Timer

 function setTime(){
    var timeleft = 75;
    var Intervals = 15;

    var downloadTimer = setInterval(function function1(){
    document.getElementById("Timer").innerHTML ="Time remaining: "+ timeleft + " seconds";
    timeleft -= 1;

    }, 1000);
}; 
 

// option selector 
//var selectOptions = [];
//var quizSpace = $('#quiz');

function questions(){
var body = document.getElementById("quiz");

var Title = document.createElement("div");
var listEl = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

var listItems = document.getElementsByTagName("li");

Title.textContent = "Where the question goes";
li1.textContent = "test";
li2.textContent = "test";
li3.textContent = "test";
li4.textContent = "test";

//Option[0]
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
