Ext.define('App.model.Base', {
	extend : 'Ext.data.Model',

	fields : [ {
		name : 'id',
		type : 'int'
	} ],

	schema : {
		namespace : 'App.model'
	}
});