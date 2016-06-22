/**
 * http://usejsdoc.org/
 */

var trainer = {
	doTeach : function() {

		var sub = 'JS'; // moved to HEAP memory before context-destroyed..
		setTimeout(function() {
			try {
				console.log('after timeout...teaching ' + sub);
				// throw new Error('ooops');
			} catch (e) {
				console.log('i caught ' + e.message);
			}
		}, 5000);
	}

};

trainer.doTeach();