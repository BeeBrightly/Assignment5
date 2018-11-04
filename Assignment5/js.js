$(document).ready(function() {
    // console.log( "ready!" );

    // track which question we are on
    var questionCounter = 0;
    // initial time of 15 seconds for each question
    var time = 15;
    // will keep tally of right guesses for end game
    var correctGuesses = 0;
    //will keep tally of wrong guesses for end game
    var incorrectGuesses = 0;

    // question & answer array
    var questions = [
      {
	    question: "Blue?",
	    choices: ["Blah Blah", "BOOGIE", "Azul", "Azurites"],
	    correctAnswer: "Azul",
	    image: "<img src = https://cdn4.iconfinder.com/data/icons/video-game-adicts/1024/videogame_icons-01-512.png class='img-circle shadow'>"
	  }, 
	  {
	    question: "Red Fish Blue Fish?",
	    choices: ["2 fish", "Kibbles & Biscuts!", "Dos Pescado", "MHMMMM.."],
	    correctAnswer: "Dos Pescado",
        image: "<img src = https://cdn4.iconfinder.com/data/icons/video-game-adicts/1024/videogame_icons-01-512.png class='img-circle shadow'>"
	 
    }, 
	  {
	    question: "How Much Wood?",
	    choices: ["CAN A WOODCHUCK CHUCK!!", "Can u even Chuck Bro??", "Is in the woodshed.. it's gonna be a long winter:", "What He Said"],
	    correctAnswer: "What He Said",
        image: "<img src = https://cdn4.iconfinder.com/data/icons/video-game-adicts/1024/videogame_icons-01-512.png class='img-circle shadow'>"
	  
    }, 
	  {
	    question: "Green Eggs?",
	    choices: ["N Ham?!", "Sam I am? ", "Nahhhh", "Dr. Good Vibes?"],
	    correctAnswer: "Nahhhh",
        image: "<img src = https://cdn4.iconfinder.com/data/icons/video-game-adicts/1024/videogame_icons-01-512.png class='img-circle shadow'>"
	  
    }, 
	  {
	    question: "Que Es ESTO * ?",
	    choices: ["Stella", "Math", "Fairie", "Pixels"],
        correctAnswer: "Fairie",
        image: "<img src = https://cdn4.iconfinder.com/data/icons/video-game-adicts/1024/videogame_icons-01-512.png class='img-circle shadow'>"
	 
    },
	  {
	    question: "One?",
	    choices: ["ten", "seven", "five", "Two"],
	    correctAnswer: "ten",
	     image: "<img src = https://cdn4.iconfinder.com/data/icons/video-game-adicts/1024/videogame_icons-01-512.png class='img-circle shadow'>"
    },
	  {
	    question: "Two?",
	    choices: ["five", "eleven", "four", "twelve"],
	    correctAnswer: "eleven",
        image: "<img src = https://cdn4.iconfinder.com/data/icons/video-game-adicts/1024/videogame_icons-01-512.png class='img-circle shadow'>"
	 
      
    },
	  {
	    question: "Arroz con Pollo?",
	    choices: ["Beans n Rice", "Tuesday", "Little Fish", "Lollipop"],
	    correctAnswer: "Chicken n Rice",
        image: "<img src = https://cdn4.iconfinder.com/data/icons/video-game-adicts/1024/videogame_icons-01-512.png class='img-circle shadow'>"
	  },
	  {
	    question: "The Medieval Guitar?",
	    choices: ["Lute", "Zoot", "Fruit", "Headless Horsemen"],
	    correctAnswer: "Lute",
        image: "<img src = https://cdn4.iconfinder.com/data/icons/video-game-adicts/1024/videogame_icons-01-512.png class='img-circle shadow'>"
	          },
	  {
	    question: "Rule Number One?",
	    choices: ["*Clears Throat*", "Mutters", "Sneezes in Face", "YOU DONT TALK ABOUT FIGHT CLUB"],
	    correctAnswer: "YOU DONT TALK ABOUT FIGHT CLUB",
        image: "<img src = https://cdn4.iconfinder.com/data/icons/video-game-adicts/1024/videogame_icons-01-512.png class='img-circle shadow'>"
	 
	  },
	  {
	    question: "five , six?",
	    choices: ["PICKUP STICKS", "Not today 2", "fivesix", "Yupp..."],
	    correctAnswer: "Not today 2",
        image: "<img src = https://cdn4.iconfinder.com/data/icons/video-game-adicts/1024/videogame_icons-01-512.png class='img-circle shadow'>"
    },
	  {
	    question: "My life?",
	    choices: ["Meh", "OP", "Zelda", "Baby Boomer"],
	    correctAnswer: "OP",
        image: "<img src = https://cdn4.iconfinder.com/data/icons/video-game-adicts/1024/videogame_icons-01-512.png class='img-circle shadow'>"
	 
	  },
	  {
	    question: "Hey There! ",
	    choices: ["HIGH FIVE", "UHM WHAT", "MAYBE?", "HOLA MI AMIGO!!"],
	    correctAnswer: "HOLA MI  AMIGO!!",
        image: "<img src = https://cdn4.iconfinder.com/data/icons/video-game-adicts/1024/videogame_icons-01-512.png class='img-circle shadow'>"
	 
	  },
	  {
	    question: "Can He Build It?",
	    choices: ["No", "Not A Chance", "Nada", "Si"],
	    correctAnswer: "Si",
        image: "<img src = https://cdn4.iconfinder.com/data/icons/video-game-adicts/1024/videogame_icons-01-512.png class='img-circle shadow'>"
    },
	  {
	    question: "Is it 5:00 Somewhere?",
	    choices: ["Almost", "Jimmy?", "No.. But It's 4:20", "My Bar Has a House? "],
	    correctAnswer: "No..But It's 4:20",
        image: "<img src = https://cdn4.iconfinder.com/data/icons/video-game-adicts/1024/videogame_icons-01-512.png class='img-circle shadow'>"
	 
	  }];
	  

	// create question contents according to question count
	function questionContent() {
		// a for loop would be cool here...
    	$("#gameScreen").append("<p><strong>" + 
    		questions[questionCounter].question + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[0] + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[1] + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[2] + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[3] + 
    		"</strong></p>");
	}

	// user guessed correctly
	function userWin() {
		$("#gameScreen").html("<p>FIND NEMO! THIS IS IT</p>");
		correctGuesses++;
		var correctAnswer = questions[questionCounter].correctAnswer;
		$("#gameScreen").append("<p>YOURE THE ONE! <span class='answer'>" + 
			correctAnswer + 
			"</span></p>" + 
			questions[questionCounter].image);
		setTimeout(nextQuestion, 4000);
		questionCounter++;
	}

	// user guessed incorrectly
	function userLoss() {
		$("#gameScreen").html("<p>CLOSE BUT NO CIGAR</p>");
		incorrectGuesses++;
		var correctAnswer = questions[questionCounter].correctAnswer;
		$("#gameScreen").append("<p>TRY.. <span class='answer'>" + 
			correctAnswer + 
			"</span></p>" + 
			questions[questionCounter].image);
		setTimeout(nextQuestion, 4000);
		questionCounter++;
	}

	// user ran out of time
	function userTimeout() {
		if (time === 0) {
			$("#gameScreen").html("<p>NO MAS TIEMPO!</p>");
			incorrectGuesses++;
			var correctAnswer = questions[questionCounter].correctAnswer;
			$("#gameScreen").append("<p>The answer was <span class='answer'>" + 
				correctAnswer + 
				"</span></p>" + 
				questions[questionCounter].image);
			setTimeout(nextQuestion, 4000);
			questionCounter++;
		}
	}

	// screen that shows final score and nice message :)
	function resultsScreen() {
		if (correctGuesses === questions.length) {
			var endMessage = "Welcome To Nirvana";
			var bottomText = "Could It BE?";
		}
		else if (correctGuesses > incorrectGuesses) {
			var endMessage = "The Sun Shines Bright In Your World";
			var bottomText = "Ill See You In The Sun";
		}
		else {
			var endMessage = "YA HEEERD?";
			var bottomText = "LMAO HAHA";
		}
		$("#gameScreen").html("<p>" + endMessage + "</p>" + "<p>You got <strong>" + 
			correctGuesses + "</strong> right.</p>" + 
			"<p>You got <strong>" + incorrectGuesses + "</strong> wrong.</p>");
		$("#gameScreen").append("<h1 id='start'>Start Over?</h1>");
		$("#bottomText").html(bottomText);
		gameReset();
		$("#start").click(nextQuestion);
	}

	// game clock currently set to 15 seconds
	function timer() {
		clock = setInterval(countDown, 1000);
		function countDown() {
			if (time < 1) {
				clearInterval(clock);
				userTimeout();
			}
			if (time > 0) {
				time--;
			}
			$("#timer").html("<strong>" + time + "</strong>");
		}
	}

	// moves question counter forward to show next question
	function nextQuestion() {
		if (questionCounter < questions.length) {
			time = 15;
			$("#gameScreen").html("<p>You have <span id='timer'>" + time + "</span> seconds left!</p>");
			questionContent();
			timer();
			userTimeout();
		}
		else {
			resultsScreen();
		}
	// console.log(questionCounter);
	// console.log(questions[questionCounter].correctAnswer);
	}

	// reset score and counter parameters on restart
	function gameReset() {
		questionCounter = 0;
		correctGuesses = 0;
		incorrectGuesses = 0;
	}

    function startGame() {
    	$("#gameScreen").html("<p>You have <span id='timer'>" + time + "</span> seconds left!</p>");
    	$("#start").hide();
    	// $("#gameScreen").append("<div id='question'>");
    	// var nextQuestion = questionContent(questionCounter);
    	// $("#gameScreen").append(nextQuestion);

		// $("#gameScreen").append("<p>" + questions[questionCounter].question + "</p><p>" + questions[questionCounter].choices[0] + "</p><p>" + questions[questionCounter].choices[1] + "</p><p>" + questions[questionCounter].choices[2] + "</p><p>" + questions[questionCounter].choices[3] + "</p>");
		// questionCounter++;
		questionContent();
    	timer();
    	userTimeout();
    }

    // this starts the game
    $("#start").click(nextQuestion);

    // click function to trigger right or wrong screen
	$("#gameScreen").on("click", ".choices", (function() {
		// alert("clicked!");
		var userGuess = $(this).text();
		if (userGuess === questions[questionCounter].correctAnswer) {
			clearInterval(clock);
			userWin();
		}
		else {
			clearInterval(clock);
			userLoss();
		}
	}));
});