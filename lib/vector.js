(function() {

	if (typeof Asteroids === "undefined") {
		window.Asteroids = {};
	};

	var Vector = Asteroids.Vector = function(x, y) {
		this.x = x;
		this.y = y;
	};

	Array.prototype.toVector = function() {
		return new Vector(this[0], this[1]);
	};

})();