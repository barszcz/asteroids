(function() {

  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function (options) {
    this.COLOR = "#000";
    this.RADIUS = 20;
    this.direction = new Victor(1, 0);

    options["vel"] = [0,0];
    options["color"] = this.COLOR;
    options["radius"] = this.RADIUS;
    Asteroids.MovingObject.call(this, options);
  }

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  // Ship.prototype.img.src = 'jonathan.png';

  Ship.prototype.draw = function(ctx) {
    ctx.translate(this.pos[0], this.pos[1]);
    ctx.rotate(this.direction.direction() * -1);
    ctx.fillStyle = this.COLOR;
    ctx.beginPath();
    ctx.moveTo(22, 0);
    ctx.lineTo(-11, -10);
    ctx.lineTo(-11, 10);
    ctx.fill();
  };

  Ship.prototype.relocate = function() {
    this.pos = this.game.randomPosition();
    this.vel = Victor.fromArray([0,0]);
  }

  Ship.prototype.power = function () {
    var POWER = 0.3; // Ship power constant
    var impulse = this.direction.clone().multScalar(POWER);
    this.vel.add(impulse);
  }

  Ship.prototype.fireBullet = function () {

    var velocity = [this.direction.x * 10, this.direction.y * 10];
    game.bullets.push(new Asteroids.Bullet({game: this.game, pos: this.pos, vel: velocity}))
  }

  Ship.prototype.rotateLeft = function() {
    this.direction.rotateBy((Math.PI / 30));
  };

  Ship.prototype.rotateRight = function() {
    this.direction.rotateBy((Math.PI / 30) * -1);
  };

}());
