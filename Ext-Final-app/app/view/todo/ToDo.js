/**
 * http://usejsdoc.org/
 */

Ext.define('App.view.todo.ToDo', {
	extend : 'Ext.grid.Panel',

	xtype : 'app-todo',
	controller : 'todo',

	viewModel : {
		type : 'todo'
	},

	padding : '20px',

	bind : {
		store : "{todos}"
	},

	columns : [ {
		header : 'ID',
		dataIndex : 'id',
		width : 90,
	}, {
		header : 'Title',
		dataIndex : 'desc',
		flex : 1,
		editor : {
			allowBlank : false
		}
	}, {
		xtype : 'checkcolumn',
		header : 'completed?',
		dataIndex : 'done',
		width : 90,
		stopSelection : false
	}, {
		xtype : 'actioncolumn',
		width : 30,
		sortable : false,
		menuDisabled : true,
		items : [ {
			iconCls : 'cell-editing-delete-row',
			tooltip : 'Delete Plant',
			scope : this,
			handler : this.onRemoveClick
		} ]
	} ]
});