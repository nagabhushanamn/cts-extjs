/**
 * This class is the main view for the application. It is specified in app.js as
 * the "autoCreateViewport" property. That setting automatically applies the
 * "viewport" plugin to promote that instance of this class to the body element.
 * 
 * TODO - Replace this content of this view to suite the needs of your
 * application.
 */
Ext.define('sample1.view.main.Main', {
	extend : 'Ext.container.Container',
	xtype : 'app-main',
	requires: [
	           'sample1.view.main.MainController',
	           'sample1.view.main.MainModel',
	           'sample1.view.person.PersonGrid',
	           'sample1.view.person.PersonView',
	           'sample1.view.person.PersonForm',
	           'sample1.view.person.PersonPanel',
	           'Ext.layout.container.Fit'
	       ],

	controller : 'main',
	viewModel : {
		type : 'main'
	},

	layout : {
		type : 'hbox',
		align : 'stretch'
	},
	defaults : {
		flex : 1
	},
	items : [ {
		xtype : 'container',
		layout : {
			type : 'vbox',
			align : 'stretch'
		},
		defaults : {
			flex : 1,
			margin : 5,
			border : true
		},
		items : [ {
			xtype : 'persongrid'
		}, {
			title : 'Data View',
			autoScroll : true,
			bind : {
				title : '{currentPerson.name}'
			},
			items : [ {
				xtype : 'personview'
			} ]
		} ]
	}, {
		xtype : 'container',
		layout : {
			type : 'vbox',
			align : 'stretch'
		},
		defaults : {
			flex : 1,
			margin : 5,
			border : true
		},
		items : [ {
			xtype : 'personform'
		}, {
			xtype : "personpanel",
			title : 'Data Panel'
		} ]

	}]
});
