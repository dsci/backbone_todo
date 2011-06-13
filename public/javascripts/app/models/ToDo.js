var ToDo = Backbone.Model.extend({
	name: null,
	initialize: function(){
		this.toDos = new ToDoLibrary();
		this.name = "xc";
	},
	url: function() {
		return this.isNew() ? '/todos' : '/todos/' + this.get('id');
	}
});