/**
 * BizDash.store.Products
 */
	Ext.define('App.store.Products', {
		extend: 'Ext.data.Store',
		alias:'store.products',
		model: 'App.model.Product',

		requires:[
		         'Ext.data.Store',
		         'App.model.Product',
		         'Ext.data.proxy.Rest'
		         ],
		
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