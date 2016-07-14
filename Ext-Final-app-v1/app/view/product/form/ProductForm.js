/**
 * http://usejsdoc.org/
 */

Ext.define('App.view.product.ProductForm', {
	extend : 'Ext.form.Panel',
	xtype:'product-form',
	
	requires:[
	          'App.view.product.ProductFormController',
	          'App.view.main.ProductFormModel'
	          ],
	
	controller:'productForm', 
	viewModel:{
		type:'productForm'
	},
	
	bind:{
		title:'{rec.Name}'
	},
	
	frame: true,
    bodyPadding: 10,
    scrollable:true,
    width: 500,
    height: 400,
    
   
	
	items:[
	       
	       {
	    	   xtype:'textfield',
	    	   fieldLabel:'Name',
	    	   bind:'{rec.Name}'  // 2-way data-bind
	       },
	       {
	    	   xtype:'textarea',
	    	   fieldLabel:'Description',
	    	   height:100,
	    	   bind:'{rec.Description}'
	       },
	       {
	    	   xtype:'numberfield',
	    	   fieldLabel:'Quantity',
	    	   bind:'{rec.Quantity}'
	       },
	       {
	    	   xtype:'numberfield',
	    	   fieldLabel:'Price',
	    	   decimalPrecision:2,
	    	   bind:'{rec.Price}'
	       }
	       
	       ],

	       buttons: [{
	    	   xtype:'button',
	    	   text:'Save',
	    	   listeners:{
	    		   click:'onSave'
	    	   }
	       },
	       {
	    	   xtype:'button',
	    	   text:'Cancel',
	    	   listeners:{
	    		   click:'onCancel'
	    	   }
	       }
	       ]      
	
});
