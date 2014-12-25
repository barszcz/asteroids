(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Bullet = Asteroids.Bullet = function (options) {
    options["color"] = Asteroids.MovingObject.randomColor();
    options["radius"] = Bullet.RADIUS;
    Asteroids.MovingObject.call(this, options);
  }

    // Bullet.COLOR = Asteroids.MovingObject.randomColor();
    Bullet.RADIUS = 3;

  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);

  Bullet.prototype.isWrappable = false;

  Bullet.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroids.Asteroid) { // FU JS
      this.game.remove(otherObject);
      this.game.remove(this);
    }

  }

}());
