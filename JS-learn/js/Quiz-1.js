/**
 * http://usejsdoc.org/
 */


function Person(name,age){
	this.name=name;
	this.age=age;
	this.sayName=function(){
		console.log('im '+this.name);
	};
}


var p1=new Person('Abc',100);