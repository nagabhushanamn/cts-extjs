/**
 * http://usejsdoc.org/
 */

Ext.define('sample1.view.person.PersonPanel', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.personpanel',
	bind : {
		data : {
			bindTo : '{currentPerson}',
			deep : true
		},
		title : '<b>{currentPerson.fname}</b>'
	},
	tpl:[
	     '<table>',
	     '<tr><td>First Name:</td><td>{fname}</td></tr>',
	     '<tr><td>Last Name:</td><td>{lname}</td></tr>',
	     '<tr><td>Age:</td><td>{age}</td></tr>',
	     '</table>'
	     ].join("")

});
