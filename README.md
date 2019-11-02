## Random Password Generator

#### Description
This application is a multiple choice quiz about JavaScript. The application will run for 75 seconds. You will be given 10 seconds
to answer each question. If you get an answer wrong, you will loose points. If you do not answer intime the next question will load.
You score will be higher the faster you answer the questions. The longer you take the lower your score!

The focus point of this application is the use of Javascript and our dive deeper into this programming language. 
Theories used are DOM, nested arrays, scope, Local browser storage and click events.
Additionally, twitter bootstrap and custom css were used to provide the user interface and responsiveness of the application.

#### Steps to use:
1. Click Start to begin quiz.
2. You will be given a question and four choices where only one will be correct.
3. Clicking on a choice will load the next question.
4. Once all questions are answered you will be shown your score.
5. Add your initials and sbmit your score to be ranked with paster players.
6. Use the Highscore link to view a list of past scores

#### Languages used:
* HTML and CSS
* Javascript
* Jquery

#### Tests:

##### Responsiveness and CSS per brower
* Chrome browser - base line requirments
* Firefox bowser
** Responsivness - pass
** CSS changes - n/a
** Browser variations - n/a
* Edge
** Responsivness - pass
** CSS changes - n/a
** Browser variations - n/a
* Responsiveness - Android mobile chrome
** Responsivness - pass
** CSS changes - n/a
** Browser variations - n/a

##### UX
* No issues were found

#### Code test:
HTML was verified via https://validator.w3.org/nu/ 


#### Authors
Tara de Mel

#### Acknowledgments
Monash coding Bootcamp academic staff

#### Pseudo Code
Start quiz button. 
Timer begins - countdown from n seconds
First question loads
Multiple choice - uses buttons?
OnClick function to check answer and load next question
Repeat until last question 

Quiz will end two ways 
- time ran out 
- answered all questions

The user is presented with their final score and asked to enter their initials. 


Timer section
- Main count down begins on start button
- Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (for example, 15 seconds are subtracted from time remaining).

Local storage and high score
- Final score and initials are stored in localStorage via get and set
- Link to "Veiw Highscores"
- Will show a list of user initial and their score.
- User option to clear their score
