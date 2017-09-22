
//JAVASCRIPT VARIBLES

	var question = [];
	var correctAnswer = "";
	var answerText = "";
	var clickAnswer = "";
	var qImage = "";
	var qCorrect = 0;
	var qIncorrect = 0;
	var qUnanswered = 0;
	var i = 0;
	var j = 0;
	var countdownTimer = 0;

//ON CLICK BUTTON TO START  THE GAME
	$(document).on('keypress', function(event) {
    if(event.keyCode === 13) {
         // Enter key was pressed
    }
})

//console.log(event.keyCode)

	$("startBtn").on("click".function() {
		gameReset();

	});





question[0] = {
	question: "What jersey number did Deion wear while playing football in the NFL?"
	option: ["5","21","99","54"],
	aAnswer: 1,
	iamge: "deion.gif",
};

question[1] = {
	question: "How many Super Bowls did Troy Aikman win?"
	option: ["1","6","3","10"],
	aAnswer: 2,
	iamge: "troy.gif",
};

question[2] = {
	question: "What high school did Kobe Bryant attend?"
	option: ["Anson High","Dudley High","East Texas High","Lower Merion High"],
	aAnswer: 3,
	iamge: "troy.gif",
};

question[3] = {
	question: "Where did Michael Jordan attend college?"
	option: ["UNC-Chapel Hill","Duke","Wake Forest","Yale"],
	aAnswer: 0,
	iamge: "troy.gif",
};

question[4] = {
	question: "What MLB team did Derek Jeter Play for?"
	option: ["Cubs","Yankees","Red Sox","Marlins"],
	aAnswer: 1,
	iamge: "troy.gif",
};