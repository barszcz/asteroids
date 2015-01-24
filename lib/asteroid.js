(function() {

if (typeof Asteroids === "undefined") {
  window.Asteroids = {};
}

var Asteroid = Asteroids.Asteroid = function (options) {
  options["vel"] = Asteroids.Util.randomVec(Asteroid.SPEED);
  options["color"] = Asteroids.MovingObject.randomColor();
  options["radius"] = Asteroid.RADIUS;
  Asteroids.MovingObject.call(this, options);
}
  Asteroid.COLOR = "#000000";
  Asteroid.RADIUS = 10;
  Asteroid.SPEED = 3;

Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

Asteroid.prototype.collideWith = function (otherObject) {
  if (otherObject instanceof Asteroids.Ship) {
    this.game.lives--;
    this.game.showLives();
    if (this.game.lives > 0) {
      otherObject.relocate();
    }

  }

}


}());
