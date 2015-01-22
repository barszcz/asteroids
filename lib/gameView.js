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
    var img = new Image();
    
    
    img.src = './Space.jpg';

    img.onload = function() {
      view.ctx.drawImage(img, 0,0);
    };

    var moveAndDraw = function () {
      view.game.step();
      view.ctx.drawImage(img, 0,0);
      view.game.draw(this.ctx);
      // console.log("hi");
    }
    this.bindKeyHandlers();
    window.setInterval(moveAndDraw, this.INTERVAL);
  }

  GameView.prototype.bindKeyHandlers = function () {
    var view = this;

    key('up, w', function () {
      view.game.ship.power();
      return false;
    });

    key('down, s', function () {
      view.game.ship.power(true);
      
    });

    key('left, a', function () {
      view.game.ship.rotateLeft();
      return false;
    });

    key('right, d', function () {
      view.game.ship.rotateRight();
      return false;      
    });

    key('space', function () {
      view.game.ship.fireBullet();
      return false;
    });
  }


}());
