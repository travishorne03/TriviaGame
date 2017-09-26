//JAVASCRIPT VARIBLES
var question = [];
var correctAnswer = "";
var answerCode = "";
var clickAnswer = "";
var qImage = "";
var qCorrect = 0;
var qIncorrect = 0;
var qUnanswered = 0;
var questionIx = 0;
var questionJx = 0;
var countdownTimer = 0;


$( document ).ready(function() {

    //initialize variables  
    var question = [];

question[0] = {
        question: "What jersey number did Deion wear while playing football in the NFL?"
        option: ["5", "21", "99", "54"],
        aAnswer: 1,
        image: "deion.gif",
    };

    question[1] = {
        question: "How many Super Bowls did Troy Aikman win?"
        option: ["1", "6", "3", "10"],
        aAnswer: 2,
        image: "troy.gif",
    };

    question[2] = {
        question: "What high school did Kobe Bryant attend?"
        option: ["Anson High", "Dudley High", "East Texas High", "Lower Merion High"],
        aAnswer: 3,
        image: "troy.gif",
    };

    question[3] = {
        question: "Where did Michael Jordan attend college?"
        option: ["UNC-Chapel Hill", "Duke", "Wake Forest", "Yale"],
        aAnswer: 0,
        image: "troy.gif",
    };

    question[4] = {
        question: "What MLB team did Derek Jeter Play for?"
        option: ["Cubs", "Yankees", "Red Sox", "Marlins"],
        aAnswer: 1,
        image: "troy.gif",
    };



// function to reset variables on start/restart of game.    
    function gameReset() {

    }

    // 30 second timer function. Displays remaining seconds (j) at #timer. Keeps track of unanswered question count
    // (those without a click within 30 seconds).
    function startTimer() {
        $("#timer").html(" ");
        questionJx = 30;
        countdownTimer = setInterval(function() {
            $("#timer").html(j + " seconds remaining");
            questionJx = questionJx - 1;
            if (questionJx < 0) {
                clearInterval(countdownTimer);
                $("#triviaQuestion").html("Sorry ... Time's up! The answer was: "+answerText+".");
                qUnanswered++;
                i++;
                showAnswer();
            }
        }, 1000);
    }

    // function to move to next question & reset timer
    function nextQuestion() {
        startTimer(); 
        resetQuestion();
    }

    // replace the html with the questions and possible answers. Populate variables with correct answer id, text & image.
    function resetQuestion() {

    

    }

    // hide the question div, update image and show image div. Wait 5 seconds then move to next question (nextQuestion()).
    // If last question, call results function (showResults()).
    function showAnswer() {

        // show if they answered correctly or not and show image

    }

    // listen for click on "list-group". Check if answer is correct and update #triviaQuestion. Call showAnswer() to display image.
    $(".list-group-item").on("click", function() {
        clearInterval(countdownTimer);

        // get clicked value 

        i++;
        showAnswer();
    })

    // Function to show game results. Update results div with stats and show() them. Hide() other irrelevant divs. Change text on start button and show().
    function showResults() {

        // at the end of the game, display total correct and incorrect

    }

    // button to start game
    $("#startBtn").on("click", function() {
        gameReset();
    });

});





