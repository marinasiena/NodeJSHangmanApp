function Letter(letterGuessed){

this.name = letterGuessed;
guessed.entries = false;

}

Letter.prototype.display = function(){
		if(guessed.entries === false){
			return '-';
		}else{
			return this.name;
		}
	}

module.exports = Letter;
