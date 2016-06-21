/**
 * http://usejsdoc.org/
 */

/*
 *  in JS , falsy values
 *  
 *  
 *  false
 *  null
 *  undefined
 *  ""
 *  0
 * 
 * 
 */


//var person={
//		name:'Nag',
//		age:32
//};

//if(person.name){
//	console.log('name property exist..');
//}
//
//if("name" in person){
//	console.log('name property exist..');
//}

//----------------------------------------

"use strict";

//var person={
//		name:'Nag',
//		age:32
//};

//Object.defineProperty(person, 'name', {configurable:false});
//delete person.name;

//Object.defineProperty(person, 'name', {configurable:false,writable:false});
//person.name='';

//console.log(person.name);

//------------------------------------------

//var person={
//	name:'Nag',
//	age:32
//};

//Object.preventExtensions(person);
//Object.seal(person);
//Object.freeze(person);

//person.adasdasd="asdasdasd";
//delete person.name;
//delete person.age;
//person.name="";



//------------------------------------------


/*
 *  JS -objs , can have 2 types of properties
 *  
 *  1. data property
 *  2. accessor property
 *  
 * 
 */

var person = {
	_name : 'Nag', // data property
	set name(newName){
		if(newName){
			this._name=newName;
		}
	},
	get name(){
		return this._name;
	}
};

person.name='';  // write  -> set
console.log(person.name); // read -> get







