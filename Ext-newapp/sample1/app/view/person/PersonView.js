/**
 * http://usejsdoc.org/
 */

Ext.define('sample1.view.person.PersonView', {
	extend : 'Ext.view.View',
	alias : 'widget.personview',
	config : {
		currentPerson : null
	},
	bind : {
		currentPerson : '{currentPerson}',
		store:'{persons}'
	},
	publishes:['currentPerson'],
	updateCurrentPerson : function(current, previous) {
		var sm = this.getSelectionModel();
		if (current) {
			sm.select(current);
		}
		if (previous) {
			sm.deselect(previous);
		}
	},
	listeners : {
		select : function(grid, person) {
			this.setCurrentPerson(person);
		}
	},
	itemSelector:'div.person-item',
	selectedItemCls:'selected',
	itemTpl:[
	         '<div class="person-item">',
	         '<strong> {fname} - {lname} </strong> {age} ',
	         '</div>'
	         ].join('')
	
});
