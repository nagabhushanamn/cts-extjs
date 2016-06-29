/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */

Ext.Loader.setConfig({
	enabled:true,
	Myapp:'./app'
});


Ext.define('BizDash.Application', {
    extend: 'Ext.app.Application',
    
    name: 'BizDash',
    requires: [
       		'BizDash.config.Config',
       		'BizDash.model.Product',
       		'BizDash.model.Sale',
       		'BizDash.model.User',
       		'BizDash.model.WebSiteVisitor',
       		'BizDash.ui.CustomComponent',
       		'BizDash.ui.CustomContainer'
       	],
    stores: [
        // TODO: add global / shared stores here
        'Users',
		'Products',
		'Navigation',
		'users.Admins',
		'users.Customers',
		'users.Suppliers',
		'WebSiteVisitors'
    ],
    
    launch: function () {
    	

    	var win=Ext.create('Ext.window.Window', {
			title : 'layout',
			width : 500,
			height : 300,
			layout : 'anchor',
			renderTo : Ext.getBody(),
			defaults:{
				xtype:'panel',
				height:60
			},
			items : [
			       {title:'Menu1',html:' panel at 100% - 10px',anchor:'-30'},
			       {title:'Menu2',html:' panel at 70% of anchor',anchor:'70%'},
			       {title:'Menu3',html:' panel at 50% width and 40% height of anchor',anchor:'50% 40%'},
			]
		});
    	win.show();
    	
    	
    	
    	
    }
});
