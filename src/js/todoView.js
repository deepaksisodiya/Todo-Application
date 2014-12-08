/**
 * Created by Deepak Sisodiya on 08/12/14.
 */


app.todoView = BaseView.extend({

  events: {
    "click #add": "onAddClick"
  },
  initialize: function($el) {
    this.$el = $el;
    this.addEvents();
    this.loadTemplate({}, "todoCreaterTemplate", this.$el);
  },
  onAddClick: function(e, target, dataSet) {
    var inputValue = this.$el.find("#input-todo").val();
    todoItemListObj.addTodo(inputValue);
  }

});

var todoViewObj = new app.todoView(this.$("#todoCreater"));
