/**
 * http://usejsdoc.org/
 */

Ext.define('BizDash.sample.Secratery', {
	extend : 'BizDash.sample.Employee',
	constructor : function(config) {
		Ext.apply(this, config || {});
	},
	mixins:{
		attendPhone:'BizDash.sample.tasks.attendPhone'
	}
}, function() {
});