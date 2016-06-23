/**
 * http://usejsdoc.org/
 */

Ext.define('BizDash.sample.tasks.attendPhone', {
	extend : 'Ext.Mixin',
	//	mixinConfig : {
	//		before : {
	//			attendPhone : 'phoneRing'
	//		},
	//		after : {
	//			attendPhone : 'finishCall'
	//		}
	//	},
	attendPhone : function() {
		console.log(this.name + " is answering the phone");
	},
	phoneRing : function() {
		console.log('ringing.. attend call');
	},
	finishCall : function() {
		console.log('call is over');
	}

});