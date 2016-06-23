/**
 * http://usejsdoc.org/
 */

Ext.define('BizDash.sample.Manager', {
	extend : 'BizDash.sample.Employee',
	constructor : function(config) {
		Ext.apply(this, config || {});
	},
	mixins:{
		attentClient:'BizDash.sample.tasks.attentClient',
		attentMeeting:'BizDash.sample.tasks.attentMeeting',
		supervisePersons:'BizDash.sample.tasks.superviseEmployees'
	},
	supervise : function(employee) {
		console.log(this.name +' start supervision');
		this.mixins.supervisePersons.superviseEmployee(this,employee);
	}
}, function() {
});