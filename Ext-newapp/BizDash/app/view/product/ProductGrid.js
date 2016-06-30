/**
 * http://usejsdoc.org/
 */


Ext.define('BizDash.view.product.ProductGrid', {
	
	extend : 'Ext.grid.Panel',
	
	requires:[
	          'BizDash.view.product.ProductGridController'
	          ],
	
	xtype:'product-ProductGrid',
	
	store:'Products',
	
	controller:'ProductGrid',
	
	columns:[
	         {text:'Name',dataIndex:'Name'},
	         {text:'Description',dataIndex:'Description',flex:1 },
	         {
	        	 text:'Quantity',
	        	 dataIndex :'Quantity',
	        	 renderer:function(value){
	        		 var color="black";
	        		 if(value<=3){
	        			 color='red'
	        		 }else if(value>3&&value<=7){
	        			 color="orange"
	        		 }
	        		 return '<span style="color: ' + color + ';">' + value + '</span>';
	        		 //return `<span style=color:${color}>${value}</span>`; // es-6
	        	 }
	         },
	         {  
	        	 text : 'Price ',
			     xtype: 'templatecolumn',
			     width: 200,
			     text: 'Price ',
			     dataIndex: 'Price',
			     tpl: '£{Price} (£{StockValue})'
	         },
	         {  
	        	 text : 'Action ',
			     xtype: 'widgetcolumn',
			     width: 100,
			     widget:{
			    	 xtype:'button',
			    	 text:'Edit',
			    	 listeners:{
			    		 click:'onEditClick'
			    	 }
			     }
	         }
	         ]
});
