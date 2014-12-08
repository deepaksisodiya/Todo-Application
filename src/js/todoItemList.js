/**
 * Created by Deepak Sisodiya on 07/12/14.
 */

app.todoItemList = klass({

	initialize : function(todosArray, completedCount, incompletedCount) {
		this.todosArray = todosArray;
		this.completedCount = completedCount;
		this.incompletedCount = incompletedCount;
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
	markComplete : function(index) {
		this.todosArray[index].completed = true;
		this.completedCount = this.completedCount + 1;
		this.incompletedCount = this.incompletedCount - 1;
	},
	markIncomplete : function(index) {
		this.todosArray[index].completed = false;
		this.completedCount = this.completedCount - 1;
		this.incompletedCount = this.incompletedCount + 1;
	}

});

var todoItemListObj = new app.todoItemList([], 0, 0);