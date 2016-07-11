/**
 * http://usejsdoc.org/
 */
Ext.define('Project', {
	extend : 'Ext.data.Model',
	fields : [ 'name' ],
	manyToMany : 'Employee'
});