/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('BizDash.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'BizDash.view.main.MainController',
        'BizDash.view.main.MainModel',
        'BizDash.view.navigation.NavigationTree',
        'BizDash.view.product.ProductGrid',
        'BizDash.view.user.UsersView'
    ],

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [
            {
            	xtype:'navigation-NavigationTree',
            	region : 'west',
        		width : 200
            },
            {
            	xtype:'product-ProductGrid',
            	region : 'center'
            },
            {
            	region : 'south',
            	xtype:'user-UsersView'
            }
            ]
});
