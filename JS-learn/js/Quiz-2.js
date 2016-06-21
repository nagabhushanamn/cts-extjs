/**
 * http://usejsdoc.org/
 */


var trainer={
		name:'Nag',
		doTeach:function(){
			console.log(this.name+" teaching JS");
			var self=this;
			function learn(){
				console.log(this.name +' learning JS from  '+self.name);
			}
			var emp={
					name:'emp1'
			};
			//learn(); // function-invocation ( global-obj )
			learn.call(emp); // call/apply/bind invocation
		}
};

//trainer.doTeach(); // method-invocation

var newTrainer={name:'kishore'};
trainer.doTeach.call(newTrainer);


