ToDoView = Backbone.View.extend({
	el: $("body"),
  
	initialize: function () {
    //this.friends = new Friends( null, { view: this });
    //Create a friends collection when the view is initialized.
    //Pass it a reference to this view to create a connection between the two
  },
  events: {
    "click #add-friend":  "showPrompt",
		"click #foo": "debugFoo",
		"keypress #todo_identifier" : "doingToDo"
  },
  showPrompt: function () {
    var friend_name = prompt("Who is your friend?");
  },
	debugFoo: function(){
		console.debug("foooooo");
	},
	doingToDo:function(e){
		if(e.keyCode == 13){
			var todo_identifier = $("#todo_identifier").val();
			var attrs = {name:todo_identifier};
			console.debug(todo_identifier);
			var todo = new ToDo(attrs);
			console.debug(todo.get("name"));
			todo.save(attrs);
			$("#todo-list").append("<li>" + todo.get('name') + "</li>");
		}
	}
});