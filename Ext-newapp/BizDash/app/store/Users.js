/**
 * BizDash.store.Users
 */
Ext.define('BizDash.store.Users', {

	extend : 'Ext.data.Store',

	model : 'BizDash.model.User',

	autoLoad : true,

	proxy : {
		url : 'data/users.json',
		type : 'ajax',
		reader : {
			type : 'json',
			rootProperty : 'rows'
		},
		writer : {
			type : 'json',
			writeAllFields : true,
			transform : {
				fn : function(data, request) {
					data.Email = data.Email.toLowerCase();

					return data;
				}
			}
		}
	}

});