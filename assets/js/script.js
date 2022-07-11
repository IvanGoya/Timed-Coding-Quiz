var startButton = document.querySelector('#start-button')
var scoresButton = document.querySelector('#scores-button')
var questionArea = document.querySelector('#question-area')
var answerArea = document.querySelector('#answers')
var questionText = document.querySelector('#question')
var answerOne;
var answerTwo;
var answerThree;
var answerFour;
var topScores;
var timeRemaining;
var timer;
var timerDisplay;
var selectedAnswer;
var scoreDisplay;
var score = 100;
var currentQuestion = 0;
var initialForm;
var answerList = [3, 2, 4, 2, 1, 3, 1, 2, 1, 1]
var scoreBoard = [];

function startGame() {
    replaceStartButton();
    startTimer();
    questionOne();
}

function replaceStartButton() {
    startButton.remove();

    answerOne = document.createElement('li');
    answerOne.textContent = ('');
    answerArea.appendChild(answerOne);
    answerOne.addEventListener('click', function () {
        selectedAnswer = 1;
        checkAnswer();
    })

    answerTwo = document.createElement('li');
    answerTwo.textContent = ('');
    answerArea.appendChild(answerTwo);
    answerTwo.addEventListener('click', function () {
        selectedAnswer = 2;
        checkAnswer();
    })

    answerThree = document.createElement('li');
    answerThree.textContent = ('');
    answerArea.appendChild(answerThree);
    answerThree.addEventListener('click', function () {
        selectedAnswer = 3;
        checkAnswer();
    })

    answerFour = document.createElement('li');
    answerFour.textContent = ('');
    answerArea.appendChild(answerFour);
    answerFour.addEventListener('click', function () {
        selectedAnswer = 4;
        checkAnswer();
    })
}

function startTimer() {
    timeRemaining = 100;
    timerDisplay = document.createElement('h2');
    timerDisplay.textContent = ('Time Remaining: ' + timeRemaining);
    questionArea.appendChild(timerDisplay);
    scoreDisplay = document.createElement('h2');
    scoreDisplay.textContent = ('Score: ' + score);
    questionArea.appendChild(scoreDisplay);
    timer = setInterval(function() {
        timeRemaining--
        score--
        timerDisplay.textContent = ('Time Remaining: ' + timeRemaining);
        scoreDisplay.textContent = ('Score: ' + score);
       
        if (timeRemaining <= 0) {
            timeRemaining = 0;
            clearInterval(timer);
            timerDisplay.textContent = ('Time Remaining: ' + timeRemaining);
            endGame()
        }
    }, 1000);
}
function questionOne() {
    questionText.textContent = ('Question 1: What is the correct syntax for referring to an external script called "xxx.js"?')
    answerOne.textContent = '<script href="xxx.js">'
    answerTwo.textContent = '<script name="xxx.js">'
    answerThree.textContent = '<script src="xxx.js">' //correct
    answerFour.textContent = '<script "./xxx.js">'
}
function questionTwo() {
    questionText.textContent = ('Question 2: How do you create a function in JavaScript?')
    answerOne.textContent = 'function = myFunction()'
    answerTwo.textContent = 'function myFunction()' //correct
    answerThree.textContent = 'function:myFunction()'
    answerFour.textContent = 'function("function name")'
}
function questionThree() {
    questionText.textContent = ("Question 3: How does a FOR loop start?")
    answerOne.textContent = 'for i = 1 to 5'
    answerTwo.textContent = 'for (i <= 5; i++)'
    answerThree.textContent = 'for (i = 0; i <= 5)'
    answerFour.textContent = 'for (i = 0; i <= 5; i++)' //correct
}
function questionFour() {
    questionText.textContent = ('Question 4: How do you write "Hello World" in an alert box?')
    answerOne.textContent = 'msgBox("Hello World");'
    answerTwo.textContent = 'alert("Hello World");' //correct
    answerThree.textContent = 'msg("Hello World");'
    answerFour.textContent = 'alertBox("Hello World");'
}
function questionFive() {
    questionText.textContent = ("Question 5: How do you write an IF statement in JavaScript?")
    answerOne.textContent = 'if (i == 5)' // correct
    answerTwo.textContent = 'if i == 5 then'
    answerThree.textContent = 'if i = 5'
    answerFour.textContent = 'if i = 5 then'
}
function questionSix() {
    questionText.textContent = ("Question 6: How do you add a comment in a JavaScript?")
    answerOne.textContent = '"This is a comment"';
    answerTwo.textContent = '<!--This is a comment-->'
    answerThree.textContent = '//This is a comment' //correct
    answerFour.textContent = '*This is a comment*'
}
function questionSeven() {
    questionText.textContent = ("Question 7: Which event occurs when the user clicks on an HTML element?")
    answerOne.textContent = 'onClick' //correct
    answerTwo.textContent = 'onmouseClick'
    answerThree.textContent = 'onChange'
    answerFour.textContent = 'onmouseOver'
}
function questionEight() {
    questionText.textContent = ("Question 8: How does a WHILE loop start?")
    answerOne.textContent = 'while (i <= 10; i++)';
    answerTwo.textContent = 'while (i <= 10)' // correct
    answerThree.textContent = 'while i = 1 to 10'
    answerFour.textContent = 'while i <= 10'
}
//
function questionNine() {
    questionText.textContent = ("Question 9: What is the correct way to write a JavaScript array? ")
    answerOne.textContent = 'var colors = ["red", "green", "blue"]  '// correct
    answerTwo.textContent = "red", "green", "blue" 
    answerThree.textContent = '1 = ("red"), 2 = ("green"), 3 = ("blue")'
    answerFour.textContent = 'var colors = (1:"red", 2:"green", 3:"blue")'
}
function questionTen() {
    questionText.textContent = ("Question 10: How do you round the number 7.25, to the nearest integer?")
    answerOne.textContent = 'Math.round(7.25)'//correct
    answerTwo.textContent = 'Math.rnd(7.25)' 
    answerThree.textContent = 'round(7.25)'
    answerFour.textContent = 'rnd(7.25)'
}

function endGame() {
    answerOne.remove();
    answerTwo.remove();
    answerThree.remove();
    answerFour.remove();
    timerDisplay.remove();
    questionText.textContent = 'Quiz over. Save your score, and enter your initials below!';
    initialForm = document.createElement('input');
    initialForm.type = 'text';
    questionArea.appendChild(initialForm)
    initialForm.style = 'background-color: white; color: black; max-width: 100px; align-self: center;'
    initialForm.addEventListener('keypress', function(event){
        if (event.key === 'Enter' && initialForm.value !== "") {
            var userInitials = initialForm.value;
            var finalScores = {
                initials: userInitials.trim(),
                finalScore: score
            }
            scoreBoard.push(finalScores);
            scoreBoard = scoreBoard.concat(JSON.parse(localStorage.getItem('finalScores')));
            localStorage.setItem('finalScores', JSON.stringify(scoreBoard));
            highScores()
        }
    })
}

function checkAnswer() {
    if (selectedAnswer == answerList[currentQuestion]) {
        correctAnswer()
    } else {
        wrongAnswer()
    }

    if (currentQuestion == 0) {
        currentQuestion++
        questionTwo()
    } else if (currentQuestion == 1) {
        currentQuestion++
        questionThree()
    } else if ( currentQuestion == 2) {
        currentQuestion++
        questionFour()
    } else if ( currentQuestion == 3) {
        currentQuestion++
        questionFive()
    } else if ( currentQuestion == 4) {
        currentQuestion++
        questionSix()
    } else if ( currentQuestion == 5) {
        currentQuestion++
        questionSeven()
    } else if ( currentQuestion == 6) {
        currentQuestion++
        questionEight()
    } else if ( currentQuestion == 7) {
        currentQuestion++
        questionNine()
    } else if ( currentQuestion == 8) {
        currentQuestion++
        questionTen()
    
    } else {
        timeRemaining = 0;
        clearInterval(timer);
        endGame()
    }
}

function correctAnswer() {
    score = score + 10;
    scoreDisplay.textContent = ('Score: ' + score);
    console.log('correct answer');
}

function wrongAnswer() {
    if (timeRemaining < 10) {
        score = score - timeRemaining + 1;
    } else {
        score = score - 10;
    }
    scoreDisplay.textContent = ('Score: ' + score);
    timeRemaining = timeRemaining - 10;
    console.log('wrong answer!');
    
}

function highScores() {
    timeRemaining = 0;
    clearInterval(timer);

    if (initialForm !== undefined) {
        initialForm.remove()
    }
    if (answerOne !== undefined) {
        answerOne.remove();
    }
    if (answerTwo !== undefined) {
        answerTwo.remove();
    }
    if (answerThree !== undefined) {
        answerThree.remove();
    }
    if (answerFour !== undefined) {
        answerFour.remove();
    }
    if (timerDisplay !== undefined) {
        timerDisplay.remove();
    }
    if (startButton !== undefined) {
        startButton.remove();
    }
    if (scoreDisplay !== undefined) {
        scoreDisplay.remove();
    }
    if (topScores !== undefined) {
        topScores.remove();
    }
    questionText.textContent = 'High Scores'
    var storedScores = JSON.parse(localStorage.getItem('finalScores'))
    if (storedScores !== null) {
        scoreBoard = storedScores;
    }
    var filtered = scoreBoard.filter(function (el) {
        return el != null;
    })
    scoreBoard = filtered;
    scoreBoard.sort(sortBoard)
    for (let i = 0; i < scoreBoard.length; i++) {
        var nameScore = JSON.stringify(scoreBoard[i], null, 5)
        topScores = document.createElement('li');
        var brokenUpJSON = nameScore.split('"');
        brokenUpJSON.push(brokenUpJSON[6].split('}'));
        topScores.textContent = (brokenUpJSON[3] + brokenUpJSON[7][0]);
        answerArea.appendChild(topScores);
    }
}

function sortBoard (a, b) {
    if (a.finalScore < b.finalScore) {
        return 1;
    } else if (a.finalScore > b.finalScore) {
        return -1;
    } else {
        return 0;
    }
}

startButton.addEventListener("click", startGame)
scoresButton.addEventListener("click", highScores)
// stop