(function() {
  var Client, ClientMessages, Views, routes;

  Client = require('diso.core/Client');

  Views = require('./Views');

  routes = require('./routes');

  ClientMessages = require('./ClientMessages');

  Client.run({
    routes: routes,
    Views: Views,
    Messages: ClientMessages
  });

}).call(this);
