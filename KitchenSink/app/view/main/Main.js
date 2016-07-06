/**
 * This class is the main view for the application. It is specified in app.js as
 * the "autoCreateViewport" property. That setting automatically applies the
 * "viewport" plugin to promote that instance of this class to the body element.
 * 
 * TODO - Replace this content of this view to suite the needs of your
 * application.
 */
Ext.define('KitchenSink.view.main.Main', {
	extend : 'Ext.container.Container',
	requires : [ 'KitchenSink.view.main.MainController',
			     'KitchenSink.view.main.MainModel',
			     'KitchenSink.model.Person' ],

	xtype : 'app-main',

	controller : 'main',
	viewModel : {
		type : 'main'
	},

	layout : {
		type : 'border'
	},

	items : [ {
		xtype : 'panel',
		bind : {
			title : '{name}'
		},
		region : 'west',
		html : '',
		width : 250,
		split : true
	}, {
		region : 'center',
		xtype : 'container',
		items : [ {
			// xtype : 'binding-hello-world',
			// xtype : 'binding-dynamic',
			// xtype : 'binding-two-way',
			// xtype : 'binding-formulas'
			// xtype : 'binding-component-state',
			// xtype : 'binding-chained-stores',
			// xtype : 'binding-combo-chaining',
			// xtype:'binding-selection',
			// xtype:'binding-model-validation'
			// xtype:'binding-field-validation',
			// xtype:'binding-two-way-formulas',
			// xtype:'binding-slider-form',
			// xtype:'binding-child-session',
			// xtype:'form-fieldcontainer'
			
			
			   xtype:'array-grid'	
			
		} ]
	} ]
});
