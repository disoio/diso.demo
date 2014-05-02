(function() {
  var Actions, Connect, Messages, PORT, Path, Server, routes, server;

  Path = require('path');

  Connect = require('connect');

  Server = require('diso.server');

  Actions = require('./ServerActions');

  Messages = require('./ServerMessages');

  routes = require('./routes');

  server = new Server({
    routes: routes,
    session: {
      store: new Connect.session.MemoryStore(),
      key: 'sessionid',
      secret: process.env.SESSION_SECRET
    },
    "static": {
      path: 'static',
      filepath: Path.join(__dirname, '..', 'static')
    },
    favicon: 'static/img/favicon.ico',
    Actions: Actions,
    Messages: Messages
  });

  PORT = process.env.PORT || 9999;

  server.listen(PORT);

  console.log("Server now running on localhost:" + PORT);

}).call(this);
