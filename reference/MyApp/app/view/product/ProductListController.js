Ext.define('MyApp.view.product.ProductListController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.productList',
	//views : [ 'CD.view.contactList.ContactList', 'CD.view.ContactList.Add' ],
	requires : [ 'MyApp.store.Products'],
	// stores: ['newstore'],

	init : function() {
		var me = this;

	},
	onSave : function() {
		Ext.getStore('products').save();
	},

	onSelectionChange : function() {
		this.lookupReference('btnRemoveProduct').enable();
	},

	onRemove : function() {
		var grid = this.lookupReference('productListGrid');
		var sm = grid.getSelectionModel();
		grid.plugins[0].cancelEdit();
		grid.getStore().remove(sm.getSelection());
		if (grid.getStore().getCount() > 0) {
			sm.select(0);
		}
	},

	onCreate : function() {
		var grid = this.lookupReference('productListGrid');
		grid.plugins[0].cancelEdit();

		// Create a model instance
		var r = Ext.create('MyApp.model.Product');
		grid.getStore().insert(0, r);
		grid.plugins[0].startEdit(0, 0);
	}
});