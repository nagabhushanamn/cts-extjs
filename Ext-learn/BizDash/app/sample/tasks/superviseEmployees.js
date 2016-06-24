/**
 * http://usejsdoc.org/
 */

Ext.define('Myapp.sample.tasks.superviseEmployees', {
	superviseEmployee : function(supervisor, employee) {
		console.log(supervisor.name + ' is supervising : ' + employee.name + ' ' + employee.lastName);
	}
});