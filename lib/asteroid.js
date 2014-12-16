(function() {

if (typeof Asteroids === "undefined") {
  window.Asteroids = {};
}

var Asteroid = Asteroids.Asteroid = function (hash) {
  this.COLOR = "#000000";
  this.RADIUS = 10;
  this.SPEED = 1;
  hash["vel"] = Asteroids.Util.randomVec(this.SPEED);
  hash["color"] = this.COLOR;
  hash["radius"] = this.RADIUS;
  Asteroids.MovingObject.call(this, hash);
}

Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

}());
