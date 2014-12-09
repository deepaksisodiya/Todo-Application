/**
 * Created by Deepak Sisodiya on 08/12/14.
 */


app.todoFooterView = BaseView.extend({

  events: {
    "click #removeAll": "onRemoveAllClick"
  },
  initialize: function($el) {
    this.$el = $el;
    this.addEvents();
    this.render();
    var self = this;
    todoItemListObj.on("change", function() {
      self.render();
    });
  },

  render : function () {
    this.loadTemplate(todoItemListObj, "todoFooterTemplate", this.$el);
  },

  onRemoveAllClick :function() {
    todoItemListObj.removeAllTodo();
  }

});

var todoFooterViewObj = new app.todoFooterView($("#todoFooter"));
