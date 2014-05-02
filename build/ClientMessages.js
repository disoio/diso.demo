(function() {
  var ClientMessages,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  ClientMessages = (function() {
    function ClientMessages(options) {
      this.nameReply = __bind(this.nameReply, this);
      this.client = options.client;
    }

    ClientMessages.prototype.clientReady = function() {
      return console.log("OH SHIT THE CLIENT IS READY");
    };

    ClientMessages.prototype.nameReply = function(data, cb) {
      return console.log("OK GOT THIS NAME : " + data.name);
    };

    return ClientMessages;

  })();

  module.exports = ClientMessages;

}).call(this);
