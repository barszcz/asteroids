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
    window.setInterval(moveAndDraw, 5);
  }


}());
