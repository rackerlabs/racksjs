// Generated by CoffeeScript 1.7.1
(function() {
  var RacksJS, asset, fs, path;

  asset = require('assert');

  path = require('path');

  fs = require('fs');

  RacksJS = require('../lib/racks.js');

  describe("RacksJS", function() {
    return it("should authenticate", function(ok) {
      return new RacksJS({
        username: 'someJunk!',
        apiKey: 'someOtherJunk!!!',
        test: true,
        verbosity: 1
      }, function(rs) {
        ok();
        describe("HTTP verbs", function() {
          return it("should work without error! (HTTP calls mocked)", function(ok) {
            return rs.get('http://github.com/erulabs/racksjs', function(reply) {
              return rs.post('http://github.com/erulabs/racksjs', {}, function(reply) {
                return rs["delete"]('http://github.com/erulabs/racksjs', function(reply) {
                  return rs.put('http://github.com/erulabs/racksjs', function(reply) {
                    return ok();
                  });
                });
              });
            });
          });
        });
        return describe("Service catalog", function() {
          return it("parsing should have occured (even against our mock catalog)", function(ok) {
            var product, _i, _len, _ref;
            _ref = rs.serviceCatalog;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              product = _ref[_i];
              if (rs.products[product.name] == null) {
                return ok((function() {
                  throw new Error('Error parsing catalog!');
                })());
              }
            }
            return ok();
          });
        });
      });
    });
  });

}).call(this);
