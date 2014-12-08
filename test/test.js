var should = chai.should();


describe('#todoItem', function() {

	var todoItem = app.todoItem;
	it('todoItem should be Function', function() {
		todoItem.constructor.should.eql(Function);
	});
	
	it('todoItem return an todo Object', function() {
		var x = new todoItem("Test TODO");
		x.constructor.should.eql(todoItem);
	});
	
	it('todoItem return an todo which has Title Property', function() {
		var x = new todoItem("Test TODO");
		x.title.should.eql("Test TODO");
	});
	
	it('todoItem return an todo which has completed Property', function() {
		var x = new todoItem("Test TODO");
		x.completed.should.eql(false);
	});
	
	it('todoItem should support Empty title', function() {
		var x = new todoItem("");
		x.title.should.eql("");
	});
	
});

describe("#todoItemList", function() {

	var todoItemList = app.todoItemList;
	it("todoItemList should be function" , function() {
		todoItemList.constructor.should.eql(Function);
	});

	it("todoItemList should return an todoItemList object", function() {
		var x = new todoItemList();
		x.constructor.should.eql(todoItemList);
	});

	it("todoItemList return todoItemList which has todosArray , completedCount , incompletedCount property", function() {
		var x = new app.todoItemList();
		x.todosArray.should.eql([]);
		x.completedCount.should.eql(0);
		x.incompletedCount.should.eq(0);
	});

});

mocha.run();