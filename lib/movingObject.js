(function () {

  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject = function (options) {
    this.pos = options["pos"];
    this.vel = options["vel"];
    this.radius = options["radius"];
    this.color = options["color"];
    this.game = options["game"];
  }

  MovingObject.prototype.isWrappable = true;

  MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI);
    ctx.fill();
  }

  var HEX_DIGITS = "0123456789ABCDEF"
  MovingObject.randomColor = function () {
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += HEX_DIGITS[Math.floor((Math.random() * 16))];
    }

    return color;
  };


  MovingObject.prototype.move = function () {
    this.pos[0] += this.vel[0];
    this.pos[1] -= this.vel[1]; // positive canvas y-position is negative y-direction because vectors
    if (this.isWrappable) {
      this.pos = this.game.wrap(this.pos);
    }
    else if (this.game.isOutOfBounds(this.pos)) {
      this.game.remove(this);
    }
  }

  MovingObject.prototype.isCollidedWith = function (otherObject) {
    var radiusSum = this.radius + otherObject.radius;
    var distance = Asteroids.Util.distance(this, otherObject);
    return (distance < radiusSum);
  }

  MovingObject.prototype.collideWith = function (otherObject) {
    // this.game.remove(otherObject);
    // this.game.remove(this);
  }

}) ();
