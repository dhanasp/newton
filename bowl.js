let Bowl=function () {
  this.position=0;
}

Bowl.prototype={
  moveBowlLeft:function(){
    this.position-=20;
  },

  moveBowlRight:function(){
    this.position+=20;
  },

  isBowlOutOfBoxOnLeft:function(){
    return this.position<0;
  },

  isBowlOutOfBoxOnRight:function(){
    return this.position>1200;
  },

  HandleBowlPosInBox:function () {
    if(this.isBowlOutOfBoxOnLeft()){
      this.position=0;
    } 
    if(this.isBowlOutOfBoxOnRight()){
      this.position=1200;
    }
  }



}
// module.exports=Bowl;
