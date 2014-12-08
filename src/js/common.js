/**
 * Created by Deepak Sisodiya on 08/12/14.
 */

var BaseView = klass({
  loadTemplate: function(dataObj, tempId, domNode) {
    var tempStr = $("#" + tempId).html();
    var compileTemp = _.template(tempStr);
    var tempHTML = compileTemp({
      obj: dataObj
    });
    domNode.html(tempHTML);
  },
  $: function(selector) {
    return this.$el.find(selector);
  },
  addEvents: function() {
    //https://gist.github.com/nsisodiya/12b00d5280d0cf757bdc
    var module = this;
    if (module.events !== undefined) {
      _.each(module.events, function(handler, key) {
        var arr = key.split(" ");
        var method = arr.shift();
        var hash = arr.join(" ");
        if (hash === "") {
          module.$el.on(method, function(e) {
            try {
              module[handler].call(module, e, e.target, e.target.dataset);
            } catch (ex) {
              console.error(ex);
            }
          });
        } else {
          module.$el.on(method, hash, function(e) {
            try {
              module[handler].call(module, e, e.target, e.target.dataset);
            } catch (ex) {
              console.error(ex);
            }
          });
        }
      });
    }
  }
});
