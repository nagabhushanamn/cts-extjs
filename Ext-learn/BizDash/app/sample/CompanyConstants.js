/**
 * http://usejsdoc.org/
 */
Ext.define('Myapp.sample.CompanyConstants', {
	singleton : true,
	companyName : 'CTS.',
	workingDays : 'Monday to Friday',
	website : 'www.cts.com',
	welcomeEmployee : function(employee) {
		console.log("Hello " + employee.getName() + ", you are now working for "+ this.companyName);
	}
});