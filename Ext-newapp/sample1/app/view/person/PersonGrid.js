/**
 * http://usejsdoc.org/
 */

Ext.define('sample1.view.person.PersonGrid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.persongrid',
	requires : [ 'Ext.form.field.Text', 
	             'Ext.form.field.Number',
			     'Ext.grid.plugin.CellEditing' ],
	config : {
		currentPerson : null, // set,get + ( apply , update )
	},
	// data-binding
	bind : {
		currentPerson : '{currentPerson}',
		store : '{persons}',
		title : '<b>{currentPerson.fname}</b>'
	},
	publishes:['currentPerson'],
	updateCurrentPerson : function(current, previous) {
		var sm = this.getSelectionModel();
		if (current) {
			sm.select(current);
		}
		if (previous) {
			sm.deselect(previous);
		}
	},
	listeners : {
		select : function(grid, person) {
			this.setCurrentPerson(person);
		}
	},
	plugins : [ {
		ptype : 'cellediting',
		clicksToEdit : 2,
		pluginId : 'cellediting'
	} ],
	header : {
		title : 'Person Grid',
		padding : '4 9 5 9',
		items : [ {
			text : 'New',
			xtype : "button",
			itemId : 'add',
			handler : 'onGridButton'
		}, {
			text : 'Reject All',
			xtype : "button",
			itemId : 'reject',
			handler : 'onGridButton',
			disabled : true,
			bind : {
				disabled : '{!storeDirty}'
			}
		}, {
			text : 'Commit All',
			xtype : "button",
			itemId : 'commit',
			handler : 'onGridButton',
			disabled : true,
			bind : {
				disabled : '{!storeDirty}'
			}
		} ]
	},

	columns : [ {
		text : 'First Name',
		dataIndex : 'fname',
		editor : {
			xtype : 'textfield',
			bind : '{currentPerson.fname}'
		}
	}, {
		text : 'Last Name',
		dataIndex : 'lname',
		flex : 1,
		editor : {
			xtype : 'textfield',
			bind : '{currentPerson.lname}'
		}
	}, {
		text : 'Age',
		dataIndex : 'age',
		editor : {
			xtype : 'textfield',
			bind : '{currentPerson.age}'
		}
	}]

});
