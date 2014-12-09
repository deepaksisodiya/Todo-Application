/**
 * Created by Deepak Sisodiya on 07/12/14.
 */


var app = {};

app.todoItem = klass({

  initialize: function(title, completed) {
    this.title = title;
    if (completed === undefined) {
      this.completed = false;
    } else {
      this.completed = completed;
    }

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


