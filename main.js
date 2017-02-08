var TennisGame = function (name1,name2){

  this.playerOne = name1;
  this.playerTwo = name2;

  this.playerOneScore = 0;
  this.playerTwoScore = 0;

  this.playerOneScores = function(){
    this.playerOneScore++;
    if(this.hasAdvantage === this.playerOne){
      this.hasWinner = this.playerOne;
    }
  }

  this.playerTwoScores = function(){
    this.playerTwoScore++;
    if(this.hasAdvantage == this.playerTwo){
      this.hasWinner = this.playerTwo;
    }
  }

  this.isDeuce = function(){
    if(this.playerOneScore>=3 && this.playerTwoScore>=3 && this.playerOneScore === this.playerTwoScore) {
      return true;
    } else {
      return false;
    }
  }

  this.hasAdvantage = function() {
    if(this.playerOneScore>3 && this.playerTwoScore>3 && this.playerOneScore>this.playerTwoScore) {
      this.hasAdvantage = this.playerOne;
      return true;
    } else if (this.playerOneScore >3 && this.playerTwoScore >3 && this.playerOneScore<this.playerTwoScore) {
      this.hasAdvantage = this.playerTwo;
      return true;
    } else {
      return false;
    }
  }

  this.playerWithHighestScore = function() {
    if(this.playerOneScore>this.playerTwoScore){
      return String(this.playerOne);
    } else if (this.playerOneScore<this.playerTwoScore){
      return String(this.playerTwo);
    }
  }

  this.translateScore = function(score) {
    switch(score){
      case 0:
        return "Love";
        break;
      case 1:
        return "Fifteen";
        break;
      case 2:
        return "Thirty";
        break;
      case 3:
        return "Forty";
        break;
      case 4:
        return "test";
        break;
    }
  }


  this.getScore = function() {
    if(this.isDeuce()==true) {
      return "Deuce";
    } else if (this.playerOneScore <=3 && this.playerTwoScore <=3 && this.playerOneScore == this.playerTwoScore){
      return this.translateScore(this.playerOneScore)+" all";
    } else if (this.hasAdvantage() !== false){
      return "Advantage "+String(this.hasAdvantage);
    } else if (this.playerOneScore > 3 && this.playerTwoScore <3){
      return String(this.playerOne)+" wins";
    } else if (this.playerOneScore < 3 && this.playerTwoScore>3){
      return String(this.playerTwo)+" wins";
    } else {
      return String(this.translateScore(this.playerOneScore))+", "+String(this.translateScore(this.playerTwoScore));
    }
  }

  this.hasWinner = function() {
    if(this.playerOneScore > 3 && this.playerTwoScore <3){
      this.hasWinner = String(this.playerOne)+" wins";
      return true;
    } else if (this.playerOneScore < 3 && this.playerTwoScore>3){
      this.hasWinner = String(this.playerTwo)+" wins";
      return true;
    } else if (this.hasWinner == this.playerOne) {
      this.hasWinner = String(playerOne)+" wins";
    } else if (this.hasWinner == this.playerTwo) {
      this.hasWinner = String(playerTwo)+" wins";
    } else {
      return false;
    }
  }

};