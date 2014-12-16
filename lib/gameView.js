(function() {

  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function (game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.INTERVAL = 20;
  }

  GameView.prototype.start = function () {
    var view = this;
    var moveAndDraw = function () {
      view.game.draw(this.ctx);
      view.game.step();
    }
    this.bindKeyHandlers();
    window.setInterval(moveAndDraw, 5);
  }

  GameView.prototype.bindKeyHandlers = function () {
    var view = this;

    key('up, w', function () {
      view.game.ship.power([0,-0.3]);
    });

    key('down, s', function () {
      view.game.ship.power([0,0.3]);
    });

    key('left, a', function () {
      view.game.ship.power([-0.3,0]);
    });

    key('right, d', function () {
      view.game.ship.power([0.3,0]);
    });

    key('space', function () {
      view.game.ship.fireBullet();
    });
  }


}());
