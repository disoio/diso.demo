(function() {
  var $, HomeView, Mediator, View,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  View = require('diso.view');

  Mediator = require('diso.client').Mediator;

  $ = require('jquery');

  HomeView = (function(_super) {
    __extends(HomeView, _super);

    function HomeView() {
      return HomeView.__super__.constructor.apply(this, arguments);
    }

    HomeView.prototype.meta = function() {
      return {
        title: "YOUPLAYSPORTS.com",
        image: "http://youplaysports.com/static/img/logo.jpg"
      };
    };

    HomeView.prototype.run = function() {
      $('body').css({
        backgroundColor: 'red'
      });
      Mediator.send({
        name: 'name'
      });
      return Mediator.once('nameReply', (function(_this) {
        return function(data) {
          return $('body').append("<br/>AND JUST GOT THE NAME, AND THE NAME IS <h1>" + data.name + "</h1>").css({
            backgroundColor: 'green'
          });
        };
      })(this));
    };

    HomeView.prototype.template = function() {
      return "yr home page hi";
    };

    return HomeView;

  })(View);

  module.exports = HomeView;

}).call(this);
