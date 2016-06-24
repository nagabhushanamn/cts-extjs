/**
 * http://usejsdoc.org/
 */

Ext.define('Myapp.sample.tasks.attendCellPhone', {
	extend : 'Ext.Mixin',
	/*
	 * answerCellPhone is the attached function for before and after and will
	 * execute the method defined in the answerCellPhone property on each
	 * configuration object (before / after)
	 */
	mixinConfig : {
		before : {
			answerCellPhone : 'cellPhoneRinging'
		},
		after : {
			answerCellPhone : 'finishCall'
		}
	},
	cellPhoneRinging : function() {
		console.log('cell phone is ringing you may attend call');
	},
	finishCall : function() {

		console.log('cell phone call is over');
	}
});