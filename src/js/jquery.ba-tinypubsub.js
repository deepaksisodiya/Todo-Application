/* jQuery Tiny Pub/Sub - v0.7 - 10/27/2011
 * http://benalman.com/
 * Copyright (c) 2011 "Cowboy" Ben Alman; Licensed MIT, GPL */

(function($) {

  var o = $({});

  $.on = function() {
    o.on.apply(o, arguments);
  };

  $.off = function() {
    o.off.apply(o, arguments);
  };

  $.trigger = function() {
    o.trigger.apply(o, arguments);
  };

}(jQuery));
