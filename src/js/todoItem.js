/**
 * Created by Deepak Sisodiya on 07/12/14.
 */


var app = {};

app.todoItem = klass({

  initialize: function(title) {
    this.title = title;
    this.completed = false;
  },
  setComplete: function() {
    this.completed = true;
  },
  setIncomplete: function() {
    this.completed = false;
  },
  isComplete: function() {
    return this.completed;
  }

});

var todoItemObj = new app.todoItem(" ");
