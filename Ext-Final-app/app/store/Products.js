/**
 * BizDash.store.Products
 */
	Ext.define('App.store.Products', {
		extend: 'Ext.data.Store',

		model: 'App.model.Product',

		autoLoad: true,
		autoSync: true,
		proxy: {
			type  : 'rest',
			url   : 'http://localhost:3000/api/items',
			reader: {
				type        : 'json',
				//rootProperty: 'rows'
			}
		}

	});