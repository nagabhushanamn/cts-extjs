/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('sample1.view.main.MainModel', {
	extend : 'Ext.app.ViewModel',

	alias : 'viewmodel.main',

	requires : [ 'sample1.model.Person' ],

	data : {
		currentPerson : null,
	},

	// TODO - add data, formulas and/or methods to support your view

	formulas : {
		dirty : {
			bind : {
				bindTo : '{currentPerson}',
				deep : true
			},
			get : function(data) {
				return data ? data.dirty : false;
			}
		},
		storeDirty : {
			bind : {
				bindTo : '{currentPerson}',
				deep : true
			},
			get : function() {
				function isDirty(store) {
					var dirty = store.getModifiedRecords().length;
					dirty = dirty || store.getNewRecords().length;
					dirty = dirty || store.getRemovedRecords().length;
					return dirty;
				}
				return isDirty(this.getStore('persons'));
			}
		}
	},

	stores : {
		persons : {
			model : 'sample1.model.Person',
			autoLoad : true,
			proxy : {
				url : 'http://0.0.0.0:3000/api/persons',
				api:{
					
				},
				type : 'rest',
				reader : {
					type : 'json'
					//rootProperty : 'rows'
				}
			}
		}
	}

});