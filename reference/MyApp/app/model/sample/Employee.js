/**
 * http://usejsdoc.org/
 */

Ext.define('MyApp.model.Employee', {
     extend: 'Ext.data.Model',
     fields: [
     { name: 'id',  type: 'int',  convert: null },
     { name: 'firstName', type: 'string' },
     { name: 'lastName', type: 'string' },
     { name: 'fulltime', type: 'boolean', defaultValue: true,convert: null },
     { name: 'gender', type: 'string' },
     { name: 'phoneNumber', type: 'string'},
     { name : 'addressId',reference : 'Address'} 
     ],
     manyToMany: 'Project',
     validators: {
			firstName: [
			{ type: 'presence'},
			{ type: 'length', min: 2 }
			],
			lastName:[
			{ type: 'presence'},
			{ type: 'length', min: 2 }
			],
			phoneNumber: {
			  type: 'format',
			  matcher: '/^[(+{1})|(00{1})]+([0-9]){7,10}$/'
			},
			gender: {
			  type: 'inclusion',
			  list: ['Male', 'Female']
			}, 
		}
});