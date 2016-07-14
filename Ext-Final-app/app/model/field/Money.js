/**
 * BizDash.model.field.Money
 */
Ext.define('App.model.field.Money', {

	extend : 'Ext.data.field.Number',

	requires : [ 'Ext.data.validator.Range','Ext.data.field.Number' ],

	alias : 'data.field.money',

	validators : [ {
		type : 'range',
		min : 0
	} ],

	getType : function() {
		return 'money';
	}

});