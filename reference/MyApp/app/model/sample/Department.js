/**
 * http://usejsdoc.org/
 */

Ext.define('Department', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'employeeId',
		reference : 'Employee'
	} ]
});