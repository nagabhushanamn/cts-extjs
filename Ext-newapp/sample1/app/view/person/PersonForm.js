/**
 * http://usejsdoc.org/
 */

Ext.define('sample1.view.person.PersonForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.personform',
	requires : [ 'Ext.form.field.Text', 'Ext.form.field.Number' ],

	config : {
		currentPerson : null
	},
	bind : {
		currentPerson : '{currentPerson}',
		title : '<b>{currentPerson.fname}</b>'
	},
	header : {
		title : 'Person Form',
		padding : '4 9 5 9',
		items : [ {
			text : 'Reject',
			xtype : "button",
			itemId : 'reject',
			handler : 'onFormButton',
			disabled : true,
			bind : {
				disabled : '{!dirty}'
			}
		}, {
			text : 'Commit',
			xtype : "button",
			itemId : 'commit',
			handler : 'onFormButton',
			disabled : true,
			bind : {
				disabled : '{!dirty}'
			}
		} ]
	},
	bodyPadding : 10,
	defaultType : 'textfield',
	defaults : {
		anchor : '100%',
		selectOnFocus : true
	},
	items : [ {
		fieldLabel : 'First Name',
		disabled : true,
		bind : {
			value : '{currentPerson.fname}',
			disabled : '{!currentPerson}'
		}
	}, {
		fieldLabel : 'Last Name',
		disabled : true,
		bind : {
			value : '{currentPerson.lname}',
			disabled : '{!currentPerson}'
		}
	}, {
		xtype : 'numberfield',
		fieldLabel : 'Age',
		disabled : true,
		bind : {
			value : '{currentPerson.age}',
			disabled : '{!currentPerson}'
		}
	} ]

});
