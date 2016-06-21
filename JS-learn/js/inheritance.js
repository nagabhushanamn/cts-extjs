/**
 * http://usejsdoc.org/
 */

// constructor-function/class

// ES-5
//function Person(name, age) {
//
//	this.name = name;
//	this.age = age;
	// this.sayName=function(){
	// console.log('im '+this.name);
	// };
	// this.sayAge=function(){
	// console.log('im '+this.age);
	// };
//}

//Person.prototype.sayName = function() {
//	console.log('im ' + this.name);
//};
//Person.prototype.sayAge = function() {
//	console.log('im ' + this.age);
//};
//
//var p1 = new Person('Nag', 32);
//var p2 = new Person('Ria', 1);
//
//
//var p11=Object.create(p1); 
//p11.name='New Nag';


// ES6

"use strict";

class Person{
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	sayName(){
		console.log('im '+this.name);
	}
	sayAge(){
		console.log('im '+this.age);
	}
}

var p1 = new Person('Nag', 32);
var p2 = new Person('Ria', 1);


