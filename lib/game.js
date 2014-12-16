(function() {

if (typeof Asteroids === "undefined"){
  window.Asteroids = {};
}

var Game = Asteroids.Game = function(){
  this.DIM_X = 1500;
  this.DIM_Y = 1000;
  this.NUM_ASTEROIDS = 40;
  this.asteroids = [];
  this.addAsteroids();
}

Game.prototype.addAsteroids = function(){
  for (var i= 0; i < this.NUM_ASTEROIDS; i++){
    this.asteroids.push(new Asteroids.Asteroid({game: this, pos: this.randomPosition()}));
  }

}

Game.prototype.randomPosition = function(){
  var x = Math.random()*this.DIM_X;
  var y = Math.random()*this.DIM_Y;
  return [x,y]

}

Game.prototype.draw = function(ctx){
  ctx.clearRect(0,0,this.DIM_X,this.DIM_Y);

  this.asteroids.forEach(function(el,idx,arr){
    el.draw(ctx);
  });

}

Game.prototype.moveObjects = function(){
  this.asteroids.forEach(function(el,idx,arr){
    el.move();
  })

}

Game.prototype.wrap = function (pos) {
  var wx = pos[0] % this.DIM_X;
  var wy = pos[1] % this.DIM_Y;
  return [wx, wy];
}

}());