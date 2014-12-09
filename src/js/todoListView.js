/**
 * Created by Deepak Sisodiya on 08/12/14.
 */


app.todoListView = BaseView.extend({

  events: {
    "click #remove": "onRemoveClick",
    "change .todoCheckBox": "onCheckBoxClick"
  },

  initialize: function($el) {
    this.$el = $el;
    this.addEvents();
    this.mode = "all";
    this.render();
    var self = this;
    todoItemListObj.on("change", function() {
      self.render();
    });
    $.on("filterTodos", function(e, mode){
      self.mode = mode;
      self.render();
    });
  },
  render: function() {
    this.loadTemplate({list: todoItemListObj.getTodosArray(), mode: this.mode}, "todoListTemplate", this.$el);
  },

  onRemoveClick: function(e, target, dataSet) {
    todoItemListObj.removeTodo(dataSet.index);
  },

  onCheckBoxClick: function(e, target, dataSet) {
    if (target.checked) {
      todoItemListObj.markComplete(dataSet.index);
    } else {
      todoItemListObj.markIncomplete(dataSet.index);
    }
  }

});

var todoListViewObj = new app.todoListView($("#todoList"));
