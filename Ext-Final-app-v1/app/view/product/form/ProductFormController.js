
Ext.define('App.view.product.ProductFormController', {
    extend: 'Ext.app.ViewController',
   
    alias: 'controller.productForm',

   
    onSave:function(btn){
    	var productModel=this.getView().getViewModel().getData().rec;
    	productModel.commit();
    	this.closeForm();
    },
    onCancel:function(btn){
    	var productModel=this.getView().getViewModel().getData().rec;
    	productModel.reject();
    	this.closeForm();
    },
    closeForm:function(){
    	var productFrom=this.getView();
    	productFrom.close();
    	productFrom.destroy();
    }
    
});
