/**
 * http://usejsdoc.org/
 */

Ext.define('Myapp.sample.Supervisor', {
	extend : 'Myapp.sample.Employee',
	constructor : function(config) {
		Ext.apply(this, config || {});
		console.log('class B created – fullname:' + this.name + ' '+ this.lastName);
	},
	supervise : function(employee) {
		var employeefullname = employee.name + ' ' + employee.lastname;
		console.log(this.name + ' is supervising the work of '+ employeefullname);
	}
});