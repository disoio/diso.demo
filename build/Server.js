(function() {
  var Browserify, EngineIO, Http, Server, Url,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Http = require('http');

  Url = require('url');

  Browserify = require('browserify');

  EngineIO = require('engine.io');

  Server = (function() {
    function Server() {
      this.onClose = __bind(this.onClose, this);
      this.onMessage = __bind(this.onMessage, this);
      this.onConnection = __bind(this.onConnection, this);
      this.onRequest = __bind(this.onRequest, this);
      this.browserify = Browserify();
      this.browserify.require('./build/Client.js', {
        expose: 'Client'
      });
    }

    Server.prototype.listen = function(port) {
      this.port = port;
      this.http_server = Http.createServer().listen(this.port);
      this.socket_server = EngineIO.attach(this.http_server);
      this.http_server.on('request', this.onRequest);
      return this.socket_server.on('connection', this.onConnection);
    };

    Server.prototype.onRequest = function(request, response) {
      var path;
      path = Url.parse(request.url).path.slice(1);
      if (path === '') {
        response.writeHead(200, {
          'Content-Type': 'text/html'
        });
        return response.end(this.container('hi', 'ok'));
      } else if (path === 'static/js/Client.js') {
        return this.browserify.bundle().pipe(response);
      } else {
        response.writeHead(200, {
          'Content-Type': 'text/html'
        });
        return response.end('um');
      }
    };

    Server.prototype.onConnection = function(socket) {
      socket.on('message', this.onMessage);
      return socket.on('close', this.onClose);
    };

    Server.prototype.onMessage = function(data) {
      return console.log(data);
    };

    Server.prototype.onClose = function() {
      return console.log("CLOSING");
    };

    Server.prototype.container = function(title, body) {
      if (body == null) {
        body = '';
      }
      return "<html>\n  <head>\n    <title>" + title + "</title>\n    <script src=\"/static/js/Client.js\"></script>\n    <script>\n      var Client = require('Client');\n      var client = new Client();\n    </script>\n  </head>\n  <body>" + body + "</body>\n</html>";
    };

    return Server;

  })();

  module.exports = Server;

}).call(this);
