var ToDoLibrary = Backbone.Collection.extend({
	model: ToDo,
	initialize : function(){
		
	},
	url: "/todos"
});