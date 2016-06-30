
Ext.define('BizDash.view.product.ProductGridController', {
    extend: 'Ext.app.ViewController',
    requires:[
              'BizDash.view.product.ProductForm'
              ],
    alias: 'controller.ProductGrid',

    onEditClick:function(btn){
    	var rec=btn.getWidgetRecord();
    	var productForm=Ext.create('BizDash.view.product.ProductForm',{
    		floating:true,
    		modal:true,
    		closable:true,
    		center:true,
    		width:500,
    		height:300
    	});
    	productForm.getViewModel().setData({
    		rec:rec
    	});
    	productForm.show();
    }
   
});
