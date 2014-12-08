/**
 * Created by Deepak Sisodiya on 07/12/14.
 */

var BaseModel = klass({
  initialize: function() {
    this._bus = $({});
  },
  on: function() {
    this._bus.on.apply(this._bus, arguments);
  },
  off: function() {
    this._bus.off.apply(this._bus, arguments);
  },
  trigger: function() {
    this._bus.trigger.apply(this._bus, arguments);
  }
});
