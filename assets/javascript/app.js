"use strict";

//JAVASCRIPT VARIBLES
var questions = [];
var correctAnswer = "";
var answerCode = "";
var clickAnswer = "";
var qImage = "";
var qCorrect = 0;
var qIncorrect = 0;
var qUnanswered = 0;
var i = 0;
var j = 0;
var countdownTimer = 0;
var currentQuestion = 0;

$(document).ready(function() {

    //initialize variables  
    var questions = [];

    questions[0] = {
        questions: "What jersey number did Deion Sanders wear while playing football in the NFL?",
        options: ["5", "21", "99", "54"],
        aAnswer: 1,
        image: "deion.gif",
    };

    questions[1] = {
        questions: "How many Super Bowls did Troy Aikman win?",
        options: ["1", "6", "3", "10"],
        aAnswer: 2,
        image: "troy.gif",
    };

    questions[2] = {
        questions: "What high school did Kobe Bryant attend?",
        options: ["Anson High", "Dudley High", "East Texas High", "Lower Merion High"],
        aAnswer: 3,
        image: "troy.gif",
    };

    questions[3] = {
        questions: "Where did Michael Jordan attend college?",
        options: ["UNC-Chapel Hill", "Duke", "Wake Forest", "Yale"],
        aAnswer: 0,
        image: "troy.gif",
    };

    questions[4] = {
        questions: "What MLB team did Derek Jeter Play for?",
        options: ["Cubs", "Yankees", "Red Sox", "Marlins"],
        aAnswer: 1,
        image: "troy.gif",
    };


    function gameReset() {

    }

    // 30 second timer function. Displays remaining seconds (j) at #timer. Keeps track of unanswered question count
    // (those without a click within 30 seconds).
    function startTimer() {
        console.log("startTimer");
        $("#timer").html(" ");
        j = 30;
        countdownTimer = setInterval(function() {
            $("#timer").html(j + " seconds remaining");
            j = j - 1;
            if (j < 0) {
                clearInterval(countdownTimer);
                $("#trivia-question").html("Your time is up!! The answer was: " + answerCode + ".");
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
        $("#trivia-question").html(questions[i].questions);
        $("#answer0").html(questions[i].options[0]);
        $("#answer1").html(questions[i].options[1]);
        $("#answer2").html(questions[i].options[2]);
        $("#answer3").html(questions[i].options[3]);

        // jquery to update HTML questions & answers

    }

    // hide the question div, update image and show image div. Wait 5 seconds then move to next question (nextQuestion()).
    // If last question, call results function (showResults()).
    function showAnswer() {

        // show if they answered correctly or not and show image

    }

    // listen for click on "list-group". Check if answer is correct and update #triviaQuestion. Call showAnswer() to display image.
    $(".list-group-item").on("click", function() {
        clearInterval(countdownTimer);

    clickAnswer = $(this).attr("value"); 
        if (clickAnswer == correctAnswer) { 
            $("#trivia-question").html("Correct!")
            qCorrect++;
        } else {
            $("#trivia-question").html("Sorry, that's incorrect. The answer was: "+answerText+".")
            qIncorrect++;
        }

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

    nextQuestion();

});



