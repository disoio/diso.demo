(function() {
  var ServerActions, Views,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Views = require('./Views');

  ServerActions = (function() {
    function ServerActions(options) {
      this.home = __bind(this.home, this);
      this.session = options.session;
    }

    ServerActions.Page = Views.MainPageView;

    ServerActions.notFound = function(request, response) {
      return response.end("OH NOT FOUND OH NO");
    };

    ServerActions.prototype.home = function(params, cb) {
      return cb({
        View: Views.HomeView,
        data: {}
      });
    };

    return ServerActions;

  })();

  module.exports = ServerActions;

}).call(this);
