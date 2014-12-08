/**
 * Created by Deepak Sisodiya on 08/12/14.
 */


app.todoFooterView = BaseView.extend({

  events: {
    "click #completed": "onCompletedClick"
  },
  initialize: function($el) {
    this.$el = $el;
    this.addEvents();
    this.loadTemplate({}, "todoFooterTemplate", this.$el);
  },
  onCompletedClick: function() {
    console.log("todo");
  }

});

var todoFooterViewObj = new app.todoFooterView($("#todoFooter"));
