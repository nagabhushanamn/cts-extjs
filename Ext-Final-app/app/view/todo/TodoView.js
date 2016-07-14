/**
 * http://usejsdoc.org/
 */

Ext.define('App.view.todo.TodoView', {
	extend : 'Ext.panel.Panel',
	xtype : 'app-todo',
	controller : 'todo',
	
	viewModel : {
		type : 'todo'
	},

	padding:'20px',	
	
	items : [ {
		xtype : 'container',
		layout : 'hbox',
		cls : 'task-entry-panel',
		defaults : {
			flex : 1
		},
		items : [ {
			reference : 'newToDo',
			xtype : 'textfield',
			emptyText : 'Enter a new todo here'
		}, {
			xtype : 'button',
			name : 'addNewToDo',
			cls : 'btn-orange',
			text : 'Add',
			maxWidth : 50,
			handler : 'onAddToDo'
		} ]
	}, {
		xtype : 'app-todo-grid'
	} ]

});