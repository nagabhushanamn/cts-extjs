/**
 * http://usejsdoc.org/
 */

Ext.define('Myapp.sample.Employee', {
	//	name : 'Unknown',
	//	lastName : 'Unknown',
	//	age : 0,
	statics:{
	       instanceCount: 0,
	       payrollId: 1000,
	       nextId : function(){
	         return ( this.payrollId + this.instanceCount );
	       }
	},
	config:{
	       name: 'Unknown',
	       lastName: 'Unknown',
	       age: 0,
	       isOld: false,
	       payrollNumber: 0
	},
	applyAge: function(newAge,oldAge) {
	       this.setIsOld ( ( newAge >= 90 ) );
	       return newAge;
	 },
	updateAge:function(newAge,oldAge){
		 //
	 },
	constructor : function(config) {
		//Ext.apply(this, config || {});
		//console.log('class created – fullname:' + this.name + ' '+ this.lastName);
		this.initConfig( config );
		this.setPayrollNumber(  this.statics().nextId() );
	    this.self.instanceCount ++;
	},
	work : function(task) {
		console.log(this.name + ' is working on: ' + task);
	},
	getTotalEmployees: function(){
	       return this.statics().instanceCount;
	}
});