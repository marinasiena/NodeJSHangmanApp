var Letter = require('./letters.js');

module.exports= function Word(word){

	var letters = [];
	var wordArray = word.split('');

	wordArray.forEach(function(l){
			letters.push(new Letter(l));
	});

	this.guessesRemaining = 10;
	guessed.entries = false;

	this.letterInWord = function(userGuess){
		this.guessesRemaining --;
		guessed.entries = letters.every(function(letter){
				if(userGuess === letter.name){
					letter.guessed = true;
				}
				return letter.guessed;
			});
	}

	this.display = function(){
		var str = '';
		letters.forEach(function(letter){
			str += letter.display();
		});
		console.log('     '+str+'    remaining guesses:'+ this.guessesRemaining);
	}
}
