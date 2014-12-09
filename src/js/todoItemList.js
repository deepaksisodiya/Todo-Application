/**
 * Created by Deepak Sisodiya on 07/12/14.
 */

app.todoItemList = BaseModel.extend({

  initialize: function() {
    BaseModel.call(this);
    this.todosArray = [];
    this.completedCount = 0;
    this.incompletedCount = 0;
  },
  addTodo: function(title) {
    var todoItemObj = new app.todoItem(title);
    this.todosArray.push(todoItemObj);
    this.incompletedCount = this.incompletedCount + 1;
    this.trigger("change");
  },
  removeTodo: function(index) {
    var removedTodo = this.todosArray.splice(index, 1);
    if (removedTodo[0].completed) {
      this.completedCount = this.completedCount - 1;
    } else {
      this.incompletedCount = this.incompletedCount - 1;
    }
    this.trigger("change");
  },
  removeAllTodo: function() {
    this.todosArray = [];
    this.completedCount = 0;
    this.incompletedCount = 0;
    this.trigger("change");
  },
  markComplete: function(index) {
    if (this.todosArray[index].isComplete() === false) {
      this.todosArray[index].setComplete();
      this.completedCount = this.completedCount + 1;
      this.incompletedCount = this.incompletedCount - 1;
      this.trigger("change");
    }
  },
  markIncomplete: function(index) {
    if (this.todosArray[index].isComplete() === true) {
      this.todosArray[index].setIncomplete();
      this.completedCount = this.completedCount - 1;
      this.incompletedCount = this.incompletedCount + 1;
      this.trigger("change");
    }
  },
  getTodosArray: function() {
    return this.todosArray;
  }

});

var todoItemListObj = new app.todoItemList();
