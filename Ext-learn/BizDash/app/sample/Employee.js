/**
 * http://usejsdoc.org/
 */

Ext.define('BizDash.sample.Employee', {
	alternateClassName:'ctsEmployee',
	alias:'widget.employee',  // xtype:'widget.employee'
	statics:{
		instanceCount:0,
		payrollId:1000,
		nextId:function(){
			return (this.payrollId+this.instanceCount);
		}
	},
	inheritableStatics:{
		compName:'CTS'
	},
	config : {
		name : 'Unknown',
		lastName : 'Unknown',
		age : 0,
		payrollNumber:0
	},
	applyName : function(newName,oldName) {
		console.log('applying name');
		console.log(newName);
		if (!newName) {
			return oldName;
		} else {
			return newName;
		}
	},
	updateName:function(){
		console.log('updating name..');
		// by emiiting custom event...
	},
	constructor : function(config) {
		console.log('Employee constructor invoked...');
		// Ext.apply(this, config||{});
		this.initConfig(config);
		this.self.instanceCount++;
		this.setPayrollNumber(this.statics().nextId());
	},

	work : function(task) {
		console.log(this.name + " is working on: " + task);
	}

}, function() {
	// console.log('BizDash.sample.Employee class defined..');
});