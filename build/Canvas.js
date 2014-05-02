(function() {
  var Canvas, Paper,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Paper = require('paper');

  Canvas = (function() {
    function Canvas() {
      this.animate = __bind(this.animate, this);
    }

    Canvas.prototype.animate = function() {};

    return Canvas;

  })();

  module.exports = Canvas;

}).call(this);
