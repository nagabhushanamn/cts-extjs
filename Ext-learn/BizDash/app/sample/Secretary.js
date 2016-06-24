/**
 * http://usejsdoc.org/
 */

Ext.define('Myapp.sample.Secretary', {
	extend : 'Myapp.sample.Employee',
	mixins : {
		answerPhone : 'Myapp.sample.tasks.attendPhone',
		 util:'Myapp.sample.tasks.attendCellPhone'	
	},
	constructor : function(config) {
		Ext.apply(this, config || {});
		console.log('Secretary class created – fullname:' + this.name + ' '+ this.lastName);
	},
	answerCellPhone:function(){
	       console.log( this.name + ' is answering the cellphone');
	}
});