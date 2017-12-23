
let Apple=function(){
  this.speed=5;
  this.horizontalPos=0;
  this.topPosition=0;
}

Apple.prototype={
  drop:function () {
    this.topPosition+=this.speed;
  }
}
// module.exports=Apple;
