/**
 * Created by Deepak Sisodiya on 08/12/14.
 */


app.todoView = klass({
	initialize : function() {
		this.loadTemplate({}, "todoCreaterTemplate", $("#toddCreater"));
	},

	loadTemplate : function(dataObj, tempId, domNode) {
		var tempStr = $("#" + tempId).html();
		var compileTemp = _.template(tempStr);
		var tempHTML = compileTemp({
			obj: dataObj
		});
		domNode.html(tempHTML);
	}

});

var todoViewObj = new app.todoView();