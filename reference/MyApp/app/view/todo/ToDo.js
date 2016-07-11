/**
 * http://usejsdoc.org/
 */


Ext.define('MyApp.view.todo.ToDo', {
    extend: 'Ext.panel.Panel',
    
     /* Marks these are required classes to be to loaded before loading this view */
      requires: [
      'MyApp.view.todo.ToDoController',
      'MyApp.view.todo.ToDoModel'
      ],
      
      xtype: 'app-todo',
      controller: 'todo',

      viewModel: {
        type: 'todo'
      },
      
	  items : [ {
		xype : 'container',
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
		}
] }]
});