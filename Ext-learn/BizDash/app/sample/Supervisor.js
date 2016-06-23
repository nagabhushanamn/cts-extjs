/**
 * http://usejsdoc.org/
 */

Ext.define('BizDash.sample.Supervisor', {
	extend : 'BizDash.sample.Employee',
	constructor : function(config) {
		console.log('Supervisor constructor invoked...');
		Ext.apply(this, config || {});
	},
	supervise : function(employee) {
		console.log(this.name +" is supervising the work of "+employee.name);
	}
}, function() {
	//console.log('BizDash.sample.Supervisor class defined');
});