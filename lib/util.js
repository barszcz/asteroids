(function (){

if (typeof Asteroids === "undefined") {
  window.Asteroids = {};
}

var Util = Asteroids.Util = {}

Util.inherits = function (subclass, superclass){

  function Surrogate() {};
  Surrogate.prototype = superclass.prototype;
  subclass.prototype = new Surrogate();

};

Util.randomVec = function(length) {
  random = [-1,1][Math.floor(Math.random() * 2)]
  random2 = [-1,1][Math.floor(Math.random() * 2)]
  x = Math.random() * length * random;
  y = Math.sqrt(Math.pow(length, 2) - Math.pow(x, 2)) * random2;
  return [x, y];
}

}) ();
