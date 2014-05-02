(function() {
  var Brush, Sports;

  Brush = (function() {
    function Brush(options) {
      this.size = options.size;
      this.color = options.color;
    }

    return Brush;

  })();

  Sports = (function() {
    function Sports(options) {
      this.location = options.point;
      this.brush = new Brush(options.brush);
      this.pool = [];
      this.colorMenuOpen = false;
    }

    Sports.prototype.controls = {
      up: up,
      down: down,
      left: left,
      right: right,
      a: penDown,
      b: penUp,
      select: sizeMenu,
      start: colorMenu
    };

    Sports.prototype.up = function() {
      this.recordEvent('up');
      return this.move({
        x: 0,
        y: 1
      });
    };

    Sports.prototype.down = function() {
      this.recordEvent('down');
      return this.move({
        x: 0,
        y: -1
      });
    };

    Sports.prototype.left = function() {
      this.recordEvent('left');
      return this.move({
        x: -1,
        y: 0
      });
    };

    Sports.prototype.right = function() {
      this.recordEvent('right');
      return this.move({
        x: 1,
        y: 0
      });
    };

    Sports.prototype.move = function(dir) {
      this.location.x += dir.x;
      return this.location.y += dir.y;
    };

    Sports.prototype.penDown = function() {
      return this.recordEvent('penDown');
    };

    Sports.prototype.penUp = function() {
      return this.recordEvent('penUp');
    };

    Sports.prototype.sizeMenu = function() {};

    Sports.prototype.colorMenu = function() {};

    return Sports;

  })();

}).call(this);
