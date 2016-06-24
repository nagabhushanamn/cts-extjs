/**
 * http://usejsdoc.org/
 */

Ext.define('Myapp.sample.Manager', {
	extend : 'Myapp.sample.Employee',
	mixins : {
		attendClient : 'Myapp.sample.tasks.attendClient',
		attendMeeting : 'Myapp.sample.tasks.attendMeeting',
		supervisePersons : 'Myapp.sample.tasks.superviseEmployees'
	},
	constructor : function(config) {
		Ext.apply(this, config || {});// this.name= config.name;
		console.log('Manager class created – fullname:' + this.name + ' '+ this.lastName);
	},
	supervise : function(employee) {
		console.log(this.name + ' starts supervision ');
		this.mixins.supervisePersons.superviseEmployee(this, employee);
		console.log(this.name + ' finished supervision ');
	}
});