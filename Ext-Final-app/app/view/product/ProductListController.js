Ext.define('App.view.product.ProductListController', {
	extend : 'Ext.app.ViewController',

	requires:[
	          'Ext.app.ViewController',
	          'App.view.product.form.ProductForm'
	          ],
	
	alias : 'controller.ProductList',

	onEditClick : function(btn) {
		var rec = btn.getWidgetRecord();
		var productForm = Ext.create('App.view.product.form.ProductForm', {
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
