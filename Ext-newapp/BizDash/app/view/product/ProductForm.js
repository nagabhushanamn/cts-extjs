/**
 * http://usejsdoc.org/
 */

Ext.define('BizDash.view.product.ProductForm', {
	extend : 'Ext.form.Panel',
	xtype:'product-ProductForm',
	
	requires:[
	          'BizDash.view.product.ProductFormController',
	          'BizDash.view.main.ProductFormModel'
	          ],
	
	controller:'ProductForm', 
	viewModel:{
		type:'ProductForm'
	},
	
	bind:{
		title:'{rec.Name}'
	},
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
	 bbar:[
	       {
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
