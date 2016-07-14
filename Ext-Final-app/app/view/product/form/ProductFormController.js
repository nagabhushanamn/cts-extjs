
Ext.define('App.view.product.form.ProductFormController', {
    extend: 'Ext.app.ViewController',
   
    alias: 'controller.productForm',
    
    requires:[
              'Ext.app.ViewController'
              ],

   
    onSave:function(btn){
    	var productModel=this.getView().getViewModel().getData().rec;
    	productModel.commit();
    	// products.synch();
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
