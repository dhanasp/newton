intializeGame=function(){
  start=document.getElementById('start');
  start.onclick=startGame;
  game = new Game();
}

startGame = function() {
  score=document.getElementById('score');
  apple = document.getElementById('apple');
  bowl=document.getElementById('bowl');
  gameStatus=document.getElementById("gameStatus");
  fallAppleFromSpecificPos();
};

setAppleAtRightPos = function() {
  applePosition = Math.floor(Math.random()*955);
  game.setPosOfApple(applePosition);
}

fallAppleFromSpecificPos = function() {
  setAppleAtRightPos();
  score.innerText=`score: ${game.score}`;
  apple.style.left = `${game.apple.horizontalPos}px`;
  fallAppleTimeToTime = setInterval(fallApple,50);
}

decideAction=function(){
  if(game.isAppleInBowl()){
    updateScore();
  }
  if (game.isPlayerMissApple()) {
    gameStatus.innerText="Game Over";
    stopGame();
  }
}


fallApple = function() {
  apple.style.top = `${game.apple.topPosition}px`;
  decideAction();
  game.dropApple();

}

updateScore=function(){
    game.increaseScore();
    score.innerText=`score: ${game.score}`;
    clearInterval(fallAppleTimeToTime);
    apple.style.left=`${0}px`;
    game.apple=new Apple();
    fallAppleFromSpecificPos();
    return;
}

moveBowlLeftSide=function(){
  game.bowl.HandleBowlPosInBox();
  game.bowl.moveBowlLeft();
  bowl.style.left=`${game.bowl.position}px`;
}

moveBowlRightSide=function(){
  game.bowl.HandleBowlPosInBox();
  game.bowl.moveBowlRight();
  bowl.style.left=`${game.bowl.position}px`;
}


moveBowlForSpecificKey=function(event){
  if(event.keyCode==37){
    moveBowlLeftSide();
  }
  if (event.keyCode==39) {
    moveBowlRightSide();
  }
}

stopGame=function(){
  clearInterval(fallAppleTimeToTime);
  setTimeout(()=>location.reload(),1000);
}

pause=function(){
  clearInterval(fallAppleTimeToTime);
}


window.onkeydown=moveBowlForSpecificKey;
window.onload = intializeGame;
