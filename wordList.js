var Word = require('./word.js');

module.exports.refreshWord = function (){
	var wordOptions = ["Soak","Wow","","ModernAct","GreekTragedy"];
	var randomWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	var word = new Word(randomWord);
	return word;

};
