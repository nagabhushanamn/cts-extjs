/**
 * This class is the main view for the application. It is specified in app.js as
 * the "autoCreateViewport" property. That setting automatically applies the
 * "viewport" plugin to promote that instance of this class to the body element.
 * 
 * TODO - Replace this content of this view to suite the needs of your
 * application.
 */
Ext.define('sample1.view.main.MainController', {
	extend : 'Ext.app.ViewController',

	requires : [ 'Ext.window.MessageBox' ],

	alias : 'controller.main',

	onFormButton : function(btn) {
		var person = this.getViewModel().get('currentPerson');
		var action = btn.getItemId();
		if (person && person.isModel) {
			if ('reject' === action) {
				person.reject();
			}
			if ('commit' === action) {
				person.commit();
			}
		}
	},
	onGridButton : function(btn) {

		var vm = this.getViewModel();
		var action = btn.getItemId();
		var store = vm.getStore('persons');

		var record = null;

		if ('add' === action) {
			record = store.insert(0, {})[0];
			vm.set('currentPerson', record);
		}
		if ('reject' === action) {
			store.rejectChanges();
		}
		if ('commit' === action) {
			store.commitChanges();

			// store.sync(); // localStorage

			// person.save();

		}

	}

});
