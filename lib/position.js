(function() {

	if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  	}

  	var Position = Asteroids.Position = function(x, y) {
  		y *= -1;
  		Victor.call(this, x, y);
  	};

  	Asteroids.Util.inherits(Position, Victor)

}) ();