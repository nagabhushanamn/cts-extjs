/**
 * http://usejsdoc.org/
 */

Ext.define('MyApp.view.todo.ToDoModel', {
	
	extend : 'Ext.app.ViewModel',
	alias : 'viewmodel.todo',

	stores : {
		 todos: {
		       fields: [
		                {   name: 'id', type: 'string'  },
		                {   name: 'desc', type: 'string'    },
		                {   name: 'done', type: 'boolean'   }
		            ],
				autoLoad : true,
				sorters : [ {
					property : 'done',
					direction : 'ASC'
				} ],
				proxy : {
					type : 'localstorage',
					id : 'todos'
				},
		}
	}

});