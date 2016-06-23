/**
 * http://usejsdoc.org/
 */

Ext.define('BizDash.sample.Accountant', {
	extend : 'BizDash.sample.Employee',
	constructor : function(config) {
		Ext.apply(this, config || {});
	},
	mixins:{
		attentClient:'BizDash.sample.tasks.attentClient',
		attentMeeting:'BizDash.sample.tasks.attentMeeting'
	},
	supervise : function(employee) {
		console.log(this.name +" is supervising the work of "+employee.name);
	}
}, function() {
});