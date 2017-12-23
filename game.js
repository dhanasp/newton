// let Apple=require('./apple.js');
// let Bowl=require('./bowl.js');
let Game=function(){
  this.score=0;
  this.apple=new Apple();
  this.bowl=new Bowl();
}


Game.prototype={
  setPosOfApple:function (pos) {
    this.apple.horizontalPos=pos;
  },

  dropApple:function(){
    this.apple.drop();
  },

  isAppleAndBowlInStraightLine:function(){
    position=this.bowl.position-this.apple.horizontalPos ;
    return 55<position && position<100;
  },

  isAppleInBowl:function() {
    return this.isAppleAndBowlInStraightLine() && this.apple.topPosition == 535;
  },

  increaseScore:function(){
    this.score+=10;
  },

  isPlayerMissApple:function(){
    return game.apple.topPosition == 600;
  }



}
// module.exports=Game;
