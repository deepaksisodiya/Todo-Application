/**
 * Created by Deepak Sisodiya on 07/12/14.
 */

app.todoItemList = klass({

	initialize : function() {
		this.todosArray = [];
		this.completedCount = 0;
		this.incompletedCount = 0;
	},
	addTodo : function(title) {
		var todoItemObj = new app.todoItem(title);
		this.todosArray.push(todoItemObj);
		this.incompletedCount = this.incompletedCount + 1;
	},
	removeTodo : function(index) {
		var removedTodo = this.todosArray.splice(index, 1);
		if(removedTodo.completed) {
			this.completedCount = this.completedCount - 1;
		}else {
			this.incompletedCount = this.incompletedCount - 1;
		}
	},
	removeAllTodo : function() {
		this.todosArray = [];
		this.completedCount = 0;
		this.incompletedCount = 0;
	},
	markComplete : function(index) {
		if(this.todosArray[index].completed === false) {
			this.todosArray[index].setComplete();
			this.completedCount = this.completedCount + 1;
			this.incompletedCount = this.incompletedCount - 1;
		}
	},
	markIncomplete : function(index) {
		if(this.todosArray[index].completed === true) {
			this.todosArray[index].setIncomplete();
			this.completedCount = this.completedCount - 1;
			this.incompletedCount = this.incompletedCount + 1;
		}
	}

});

var todoItemListObj = new app.todoItemList();