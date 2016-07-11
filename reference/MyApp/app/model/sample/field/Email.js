/**
 * http://usejsdoc.org/
 */
Ext.define('App.field.Email', {
	extend : 'Ext.data.field.Field',
	alias : 'data.field.email',
	validators : {
		type : 'format',
		matcher : /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
		message : 'Wrong Email Format'
	}
});