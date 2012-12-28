// Generated by CoffeeScript 1.3.3
(function() {
  var CollisionUtils;

  CollisionUtils = {
    testIntervalCollision: function(s1, f1, s2, f2) {
      return !(s2 > f1 || s1 > f2);
    },
    testCubeCollision: function(cube1, cube2) {
      var axis, collides, fcol, _i, _len, _ref;
      fcol = CollisionUtils.testIntervalCollision;
      _ref = ['x', 'y', 'z'];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        axis = _ref[_i];
        collides = fcol(cube1.vmin[axis], cube1.vmax[axis], cube2.vmin[axis], cube2.vmax[axis]);
        if (!collides) {
          return false;
        }
      }
      return true;
    }
  };

  window.CollisionUtils = CollisionUtils;

}).call(this);
