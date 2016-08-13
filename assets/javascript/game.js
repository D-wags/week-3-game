// initialize variables
	 	var wordBank = ["chromium", "manganese", "tungsten", "molybdenum", "rubidium", "xenon", "potassium", "fluorine", "antimony", "hydrogen", "nitrogen", "zirconium", "thorium", "arsenic", "selenium", "bismuth", "polonium", "neptunium", "plutonium", "platinum", "iridium"];
	 	var elementPics = ["chromium.png", "manganese.jpeg", "tungsten.jpg", "molybdenum.jpg", "rubidium.png", "xenon.jpg", "potassium.png", "fluorine.jpeg", "antimony.jpeg", "hydrogen.jpeg", "nitrogen.jpeg", "zirconium.jpeg", "thorium.jpeg", "arsenic.jpeg", "selenium.png", "bismutt.jpeg", "polonium.jpg", "neptunium.jpeg", "plutonium.jpg", "platinum.jpg", "iridium.png"];

		var guessesUsed = 0;
		var guessesLeft = 12;
		var word = "HANGMAN";
		var guessedLetters = []
		var userGuessIndex;
		var hide = "";
		var userGuess = 0;
		var wins = 0;

		var targetA = document.getElementById("word");
		targetA.innerHTML = "";

		var targetB = document.getElementById("used");
		targetB.innerHTML = 0;

		var targetC = document.getElementById("left");
			targetC.innerHTML = 12;

		var targetD = document.getElementById("letters");
			targetD.innerHTML = guessedLetters;

		var targetE = document.getElementById("wins");


		// randomly selects word from wordBank
		function getWord() {
			var randNum = Math.floor(Math.random() * 22);
			word = wordBank[randNum];

		}
		// function changes main image
		function changeImage(imge) {
			image = document.getElementById("mainpic");
			image.src = "assets/images/" + imge;
		}
		// function hides letters of word
		function hideLetters() {
			hide = '';
			for(i = 0; i < word.length; i++) {
				hide += "-";
			}
			console.log(hide);
			var targetA = document.getElementById("word");
			targetA.innerHTML = hide;
		}
		// function reveals a letter when guessed
		function revealLetter() {
			userGuessIndex = word.indexOf(userGuess);
			for (i=0; i < word.length; i++) {
				if (word[i] === userGuess) {
					hide = hide.split("");
					hide[i] = userGuess;
					hide = hide.join("");
					targetA.innerHTML = hide;

				}
			}	
		}
		// function determines if user wins or loses
		function win_or_lose(){
			if(guessesLeft==0){
				 changeImage("explosion.jpeg");
				 guessesUsed = 0;
				 guessesLeft = 12;
				 guessedLetters = [];
				 alert("YOU LOSE!");
				 getWord();
				 hideLetters();
				 targetA.innerHTML = hide;
				 targetB.innerHTML = guessesUsed;
				 targetC.innerHTML = guessesLeft;
				 targetD.innerHTML = guessedLetters;
			}

			win = true;
			for(i=0; i < hide.length; i++){
				if (hide[i] == "-") {
					win = false;	
				}
			}
			if (win == true) {
				guessesUsed = 0;
				guessesLeft = 12;
				guessedLetters = [];
				wins = wins + 1;
				changeImage(elementPics[wordBank.indexOf(word)]);
				alert("YOU WIN!!!!");
				getWord();
				hideLetters();
				targetA.innerHTML = hide;
				targetB.innerHTML = guessesUsed;
				targetC.innerHTML = guessesLeft;
				targetD.innerHTML = guessedLetters;
				targetE.innerHTML = wins;
				
				
			}	 
		}
		
		// get word & hide word letters
		getWord();
		console.log(word);
		hideLetters();

		// anonymous function listens for keystroke and uses condintional to check if it is 
		// a correct or incorrect guess
		document.onkeyup = function(event) {
			userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		var userGuessIndex = word.indexOf(userGuess);

		if ((userGuessIndex == -1) || (guessedLetters.indexOf(userGuess) >= 0)){
			guessesLeft = (guessesLeft * 1) - 1;
			guessesUsed = (guessesUsed * 1) + 1;
			targetB.innerHTML = guessesUsed;
			targetC.innerHTML = guessesLeft;	
	
		}else {
			for (i=0; i<word.length; i++) {
				revealLetter();
		}
		
		
	}
	guessedLetters.push(userGuess);
	targetD.innerHTML = guessedLetters;
	win_or_lose();
	
	};
 