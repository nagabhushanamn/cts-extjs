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
       		'BizDash.model.WebSiteVisitor'
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
        // TODO - Launch the application
    }
});
