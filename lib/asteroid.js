(function() {

if (typeof Asteroids === "undefined") {
  window.Asteroids = {};
}

var Asteroid = Asteroids.Asteroid = function (hash) {
  hash["vel"] = Asteroids.Util.randomVec(Asteroid.SPEED);
  hash["color"] = Asteroids.MovingObject.randomColor();
  hash["radius"] = Asteroid.RADIUS;
  Asteroids.MovingObject.call(this, hash);
  this.isize = 30;
}
  Asteroid.COLOR = "#000000";
  Asteroid.RADIUS = 20;
  Asteroid.SPEED = 1;

Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);


Asteroid.prototype.collideWith = function (otherObject) {
  if (otherObject instanceof Asteroids.Ship) { // FU JS
    otherObject.relocate();
  }
  // if (otherObject instanceof Asteroids.Asteroid) {
  //   otherObject.bounce();
  //   this.bounce()
  // }
}

Asteroid.prototype.bounce = function (otherObject) {
  var tempvel = [this.vel[0], this.vel[1]];
  this.vel[0] = -otherObject.vel[0];
  this.vel[1] = -otherObject.vel[1];
  otherObject.vel[0] = tempvel[0];
  otherObject.vel[1] = tempvel[1];


}



}());
