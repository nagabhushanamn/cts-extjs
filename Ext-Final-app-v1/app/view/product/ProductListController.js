Ext.define('App.view.product.ProductGridController', {
	extend : 'Ext.app.ViewController',

	alias : 'controller.ProductList',

	onEditClick : function(btn) {
		var rec = btn.getWidgetRecord();
		var productForm = Ext.create('App.view.product.ProductForm', {
			floating : true,
			modal : true,
			closable : true,
			center : true,
			//width : 500,
			//height : 300,
			//padding:'20px'
		});
		productForm.getViewModel().setData({
			rec : rec
		});
		productForm.show();
	}

});
