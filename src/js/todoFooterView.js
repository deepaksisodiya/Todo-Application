/**
 * Created by Deepak Sisodiya on 08/12/14.
 */


app.todoFooterView = BaseView.extend({

  events: {
    "click #completed": "onCompletedClick",
    "click #removeAll": "onRemoveAllClick"
  },
  initialize: function($el) {
    this.$el = $el;
    this.addEvents();
    this.loadTemplate({}, "todoFooterTemplate", this.$el);
  },
  onCompletedClick: function() {
    console.log("todo");
  },

  onRemoveAllClick :function() {
    todoItemListObj.removeAllTodo();
  }

});

var todoFooterViewObj = new app.todoFooterView($("#todoFooter"));
