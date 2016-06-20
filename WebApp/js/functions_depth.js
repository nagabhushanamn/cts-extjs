/**
 * http://usejsdoc.org/
 */

/*
 * function(s) depth
 * 
 * 
 * 
 * we can create/define functions in 2 ways
 * 
 * 1. function declaration 2. function expression
 * 
 */

// 1.function dec
// console.log(add(12,13));
// function add(n1,n2){
// return n1+n2;
// }
// console.log(add(12,13));
// ----------------------------------
// 2.function expressions
// console.log(add(12,13));
//
// var add=function(n1,n2){
// return n1+n2;
// };
// console.log(add(12,13));

// ----------------------------------

// functions as values
// function sayHello(){
// console.log('Hello');
// }
//
// var sayHi=sayHello;
// sayHi();

// --------------------------------

// function as arguments

//function greet(f) {
//	if (f) {
//		f();
//		return;
//	}
//	console.log('Hello');
//}
//
//greet();
//greet(function(){console.log('Hola')});


//var arr=[1,3,5,7,9,2,4,6,10];
////arr.sort();
//arr.sort(function(a, b) {
//	return a-b;
//});


// --------------------------------

// function as return values


//function teach(){
//	console.log('teaching...');
//	function learn(){
//		console.log('learn...');
//	}
//	return learn;
//}
//
//var learnFunc=teach();
//learnFunc();
//learnFunc();

//-----------------------------------


//
//function reflect(){
//	console.dir(arguments);
//	return arguments[1];
//}
//console.log(reflect(12,13));


//----------------------------------


//function sum(){
//	var result=0,
//	    len=arguments.length,
//	    i=0;
//	while(i<len){
//		result+=arguments[i];
//		i++;
//	}
//	return result;
//}
//
//
//console.log(sum(1,2,3,4));



//----------------------------------


// var-scope

/*
 *  global-scope
 *  func/context scope
 * 
 */


//function f(){
//	
//	{
//		var i=100;
//	}
//	console.log(i);
//}
//f();



// ES-6

//function f(){
//	"use strict";
//	
//	{
//		let i=100;
//	}
//	console.log(i);
//}
//f();

//---------------------------


//----------------------------------







