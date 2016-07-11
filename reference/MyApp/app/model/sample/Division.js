/**
 * http://usejsdoc.org/
 */

Ext.define('Division', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'departmentId',
		reference : 'Department'
	} ]
});