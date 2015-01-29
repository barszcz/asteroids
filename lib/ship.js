(function() {

  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function (options) {
    this.COLOR = "#FFF";
    this.RADIUS = 20;
    this.direction = [1, 0];

    options["vel"] = [0,0];
    options["color"] = this.COLOR;
    options["radius"] = this.RADIUS;
    Asteroids.MovingObject.call(this, options);
  }

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);


  Ship.prototype.draw = function(ctx) {
    ctx.translate(this.pos[0], this.pos[1]);
    ctx.rotate(this.direction.angle() * -1);
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.moveTo(25, 0);
    ctx.lineTo(-15, -15);
    ctx.lineTo(-5, 0);
    ctx.lineTo(-15, 15);
    ctx.fill();
  };

  Ship.prototype.relocate = function() {
    this.pos = this.game.randomPosition();
    this.vel = [0,0];
  }

  Ship.prototype.power = function (reverse) {
    var POWER = 0.1; // Ship power constant
    var impulse;
    if (!reverse) { // Going forward
      impulse = this.direction.multiply(POWER);
      this.vel = this.vel.add(impulse);
    } else { // Going backward
      // impulse = this.direction.multiply(POWER * -1);
      // var newVel = this.vel.add(impulse);
      // if (newVel.magnitude() < this.vel.magnitude()) {
      //   // if statement prevents backward positive acceleration
      //   this.vel = newVel;
      this.vel = this.vel.multiply(1 - POWER);
    }
  }

  Ship.prototype.fireBullet = function () {
    var velocity = [this.direction[0] * 10, this.direction[1] * 10];
    this.game.bullets.push(new Asteroids.Bullet({game: this.game, pos: this.pos, vel: velocity}))
  }

  Ship.prototype.rotateLeft = function() {
    this.direction = this.direction.rotate((Math.PI / 45));
  };

  Ship.prototype.rotateRight = function() {
    this.direction = this.direction.rotate((Math.PI / 45) * -1);
  };

}());
