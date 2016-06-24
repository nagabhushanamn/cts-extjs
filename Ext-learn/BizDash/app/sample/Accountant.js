/**
 * http://usejsdoc.org/
 */

Ext.define('Myapp.sample.Accountant', {
	extend : 'Myapp.sample.Employee',
	mixins : {
		attendClient : 'Myapp.sample.tasks.attendClient',
		attendMeeting : 'Myapp.sample.tasks.attendMeeting'
	},
	constructor : function(config) {
		Ext.apply(this, config || {});
		console.log('Accountant class created – fullname:' + this.name + ' '+ this.lastName);
	}
});