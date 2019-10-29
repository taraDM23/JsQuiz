
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

//Home Page submit 

function startQuiz() {
    setTime();
    questions();
}

document.getElementById("submit").addEventListener("click", startQuiz);
//Timer

function setTime(){
    var timeleft = 75;

    var downloadTimer = setInterval(function function1(){
    document.getElementById("Timer").innerHTML ="Time remaining: "+ timeleft + " seconds";
    timeleft -= 1;

    }, 1000);
};


//function questions() 