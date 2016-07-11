/**
 * This class is the main view for the application. It is specified in app.js as
 * the "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 * 
 * TODO - Replace this content of this view to suite the needs of your
 * application.
 */
Ext.define('MyApp.view.main.Main', {
	extend : 'Ext.tab.Panel',
	xtype : 'app-main',

	requires : [ 'Ext.plugin.Viewport', 
	             'Ext.window.MessageBox',
			     'MyApp.view.main.MainController',
			     'MyApp.view.main.MainModel',
			     'MyApp.view.main.List',
			     ],

	controller : 'main',
	viewModel : 'main',

	ui : 'navigation',

	tabBarHeaderPosition : 1,
	titleRotation : 0,
	tabRotation : 0,

	// scrollable : true,

	header : {
		layout : {
			align : 'stretchmax'
		},
		title : {
			bind : {
				text : '{name}'
			},
			flex : 0
		},
		iconCls : 'fa-th-list'
	},

	tabBar : {
		flex : 1,
		layout : {
			align : 'stretch',
			overflowHandler : 'none'
		}
	},

	responsiveConfig : {
		tall : {
			headerPosition : 'top'
		},
		wide : {
			headerPosition : 'left'
		}
	},

	defaults : {
		bodyPadding : 20,
		tabConfig : {
			plugins : 'responsive',
			responsiveConfig : {
				wide : {
					iconAlign : 'left',
					textAlign : 'left'
				},
				tall : {
					iconAlign : 'top',
					textAlign : 'center',
					width : 120
				}
			}
		}
	},

	items : [ {
		title : 'Home',
		iconCls : 'fa-home',
		items : [ {
			xtype : 'mainlist'
		} ]
	}, {
		title : 'Grid',
		//iconCls : 'fa-users',
		items : [ {
			xtype : 'app-productList'
		} ]
	},
	{
		title : 'Store / Proxy',
		//iconCls : 'fa-users',
		items : [ {
			xtype : 'app-todo'
		} ]
	},
	{
		title : 'MVVM',
		//iconCls : 'fa-cog',
		items : [ {xtype:'container',items:[{xtype:'app-calc'}]} ]
	}, {
		title : 'Form - basic components ',
		//iconCls : 'fa-cog',
		bind : {},
		scrollable : true, // ??
		items : [ {
			xtype : 'feedback'
		} ]
	} ]
});
