/**
 * http://usejsdoc.org/
 */

/*
 * A closure is a function having access to the parent scope,
 * even after the parent function has closed.
 * 
 * 
 *  wht is use ?
 *  
 *  --> to abstract public behav of any module
 *  --> while executing func async , able to access parent-scopes data
 * 
 */

var trainer={
		name:'Nag',
		doTeach:function(){
			console.log('teaching JS...');
			
			var notes='JS notes...';
			
			function learn(){
				console.log('learn with '+notes);
			}
			
			return learn;
			
		} // trainer - Execution-Context destroyed
};

var learnFunc=trainer.doTeach(); // trainer - Execution-Context created

var emp1={name:'emp1'};
var emp2={name:'emp2'};

learnFunc.call(emp1);
learnFunc.call(emp2);