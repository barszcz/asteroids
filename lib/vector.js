(function() {

	if (typeof Asteroids === "undefined") {
		window.Asteroids = {};
	};

	// Vector methods for arrays


	Array.fromPolar = function(r, theta) {
		var x = r * Math.cos(theta);
		var y = r * Math.sin(theta);
		return [x, y];
	};

	Array.prototype.rotate = function(theta) {
		var x = this[0] * Math.cos(theta) - this[1] * Math.sin(theta);
		var y = this[0] * Math.sin(theta) + this[1] * Math.cos(theta);

		return [x, y];
	};

	Array.prototype.add = function(vec2) {
		var x = this[0] + vec2[0];
		var y = this[1] + vec2[1];

		return [x, y];
	};

	Array.prototype.angle = function() {
		return Math.atan2(this[1],this[0]);
	};

	Array.prototype.magnitude = function() {
		return Math.sqrt(this[0] * this[0] + this[1] * this[1]);
	};

	Array.prototype.multiply = function(factor) {
		var x = this[0] * factor;
		var y = this[1] * factor;

		return [x, y];
	};



})();