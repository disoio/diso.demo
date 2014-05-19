(function() {
  var MainPageView, View,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  View = require('diso.view');

  MainPageView = (function(_super) {
    __extends(MainPageView, _super);

    function MainPageView() {
      return MainPageView.__super__.constructor.apply(this, arguments);
    }

    MainPageView.prototype.styles = [];

    MainPageView.prototype.scripts = ['/static/runClient.js'];

    MainPageView.prototype.site_name = "diso.io";

    MainPageView.prototype.description = 'diso';

    MainPageView.prototype.viewport = 'initial-scale = 1.0,maximum-scale = 1.0';

    MainPageView.prototype.keywords = ['diso'];

    MainPageView.prototype.template = function() {
      return "<div>\n  " + (this.body.html()) + "\n</div>";
    };

    return MainPageView;

  })(View.Page);

  module.exports = MainPageView;

}).call(this);
