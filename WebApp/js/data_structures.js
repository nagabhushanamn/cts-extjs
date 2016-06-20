/**
 * http://usejsdoc.org/
 */


// JS - data-structure / data-types / variables

/*
 * 
 *  a. simple types  ( values  )
 *  b. complex types ( objects )
 * 
 * 
 *  simple types
 *  
 *  1. strings
 *  2. number
 *  3. boolean
 *  4. undefined
 *  5. null
 *  
 */
//------------------------------------

// a. string

//var name='nag';
//var selection='a';
//
//// b. number
//
//var count=10;
//var cost=12.12;
//
//// c. boolean
//
//// d. undefined
//var v;
//
//// c. null
//var person=null;

//-----------------------------------

// b. complex types

/*
 *  obj --> group of key:value pairs about any entity
 *  
 *  
 *  How to create object ?
 *  
 *  syntax:
 *  
 *  var ref=new ConstructorFunction();
 *  
 *  
 * 
 */


//var person=new Object();
//person.name='Nag';
//person.age=32;
//person.doWork=function(){
//	console.log('teaching JS');
//};
//
//delete person.age;
//

/*
 *   some built-in types in JS-lang
 *   
 *    a. Object
 *    b. Array
 *    c. RegExp
 *    d. Function
 *   
 * 
 */


// a. Object

//var person=new Object();
//person.name='nag';
//person.age=32;
//person.doWork=function(){
//console.log('teaching JS');
//};


// literal style to create objec

//var person={
//		name:'Nag',
//		age:32,
//		doWork:function(){
//			console.log('teaching JS');
//		}
//};

//---------------------------


// b. Array

//var arr=new Array();
//arr.push("red");
//arr.push("green");
//arr.push("blue");
//
//// literal synax
//var arr=["red","green","blue"];


//---------------------------


//var re=new RegExp("\\d{10}"); 
//
//// literal style
//
//var re=/\d{3}-\d{2}-\d{4}/;


//---------------------------

// Function
//
//var add=new Function("n1","n2",'var result=n1+n2;return result;');
//
//// literal style
//
//function add(n1, n2) {
//	var result = n1 + n2;
//	return result;
//}
//
//add.prop=12;
//add.m=function(){
//	console.log('....');
//};
//
//add();
//add.m();

//---------------------------------



// How to access obj's properties

/*
 * way-1 : '.' notation
 * way-2 : '[]' notation
 */

//var person={
//		name:'Nag',
//		'full-name':'Nagabhushanam N',
//		123:'value'	
//};
//person.age=32;
//person['full-address']="INDIA";
//
//console.log(person.name);
////console.log(person['name']);
//console.log(person['full-name']);
//console.log(person['123']);
//
//
//var v='name';
//console.log(person[v]);











