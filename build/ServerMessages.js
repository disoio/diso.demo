(function() {
  var ServerMessages,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  ServerMessages = (function() {
    function ServerMessages(options) {
      this.name = __bind(this.name, this);
      this.handler = options.handler;
      this.session = this.handler.session;
    }

    ServerMessages.prototype.name = function(data, cb) {
      return cb({
        name: 'BARF'
      });
    };

    return ServerMessages;

  })();

  module.exports = ServerMessages;

}).call(this);
