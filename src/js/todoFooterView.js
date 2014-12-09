/**
 * Created by Deepak Sisodiya on 08/12/14.
 */


app.todoFooterView = BaseView.extend({

  events: {
    "click #completed": "onCompletedClick",
    "click #removeAll": "onRemoveAllClick",
    "click #incomplete": "onIncompletedClick",
    "click #all": "onAllClick"
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

  onCompletedClick: function() {
    $.trigger("filterTodos", "completed");
  },

  onIncompletedClick : function() {
    $.trigger("filterTodos", "incompleted");
  },

  onAllClick : function() {
    $.trigger("filterTodos", "all");
  },

  onRemoveAllClick :function() {
    todoItemListObj.removeAllTodo();
  }

});

var todoFooterViewObj = new app.todoFooterView($("#todoFooter"));
