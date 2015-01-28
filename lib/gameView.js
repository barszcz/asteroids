(function() {

  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function (game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.INTERVAL = 20;
  }

  GameView.prototype.gameOver = function() {
    document.getElementById("game-over").className += "show";
  }

  GameView.prototype.start = function () {
    var view = this;
    var img = new Image();
    
    
    img.src = './Space.jpg';

    img.onload = function() {
      view.ctx.drawImage(img, 0,0, 600, 600);
    };

    this.game.showScore();
    this.game.showLevel();
    this.game.showLives();

    var moveAndDraw = function () {
      if (view.game.lives < 1) {
        window.clearInterval(interval);
        view.gameOver();
        return;
      }

      view.checkKeys();
      view.game.step();
      view.ctx.drawImage(img, 0,0, 600, 600);
      view.game.draw(this.ctx);
      // console.log("hi");
    }
    // this.bindKeyHandlers();
    var interval = window.setInterval(moveAndDraw, this.INTERVAL);
  }

  GameView.prototype.checkKeys = function() {
    if (key.isPressed('up')) this.game.ship.power();
    if (key.isPressed('down')) this.game.ship.power(true);
    if (key.isPressed('left')) this.game.ship.rotateLeft();
    if (key.isPressed('right')) this.game.ship.rotateRight();
    if (key.isPressed('space')) this.game.ship.fireBullet();
  }

  // GameView.prototype.bindKeyHandlers = function () {
  //   var view = this;

  //   key('up, w', function () {
  //     view.game.ship.power();
  //     return false;
  //   });

  //   key('down, s', function () {
  //     view.game.ship.power(true);
      
  //   });

  //   key('left, a', function () {
  //     view.game.ship.rotateLeft();
  //     return false;
  //   });

  //   key('right, d', function () {
  //     view.game.ship.rotateRight();
  //     return false;      
  //   });

  //   key('space', function () {
  //     view.game.ship.fireBullet();
  //     return false;
  //   });
  // }



}());
