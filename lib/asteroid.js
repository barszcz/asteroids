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
  Asteroid.RADIUS = 20;
  Asteroid.SPEED = 3;

Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

Asteroid.prototype.draw = function() {
  Asteroids.MovingObject.prototype.draw.call(this, ctx);
  var color = Color(this.color);
  ctx.fillStyle = color.darken(0.2).hexString();
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius * 0.5, 0, 2*Math.PI);
  ctx.fill();
};

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
