/**
 * http://usejsdoc.org/
 */


/*
 *  'this' keyword
 * 
 */

// why we need 'this' keyword ?

//var person={
//		pname:'Nag',
//		sayName:function(){
//			console.log('im '+this.pname);
//		}
//};

//person.sayName();
//var p=person;
//person={pname:'Ria'};
//p.sayName();

//--------------------------------------



//var p1={name:'Nag',sayName:function(){console.log('im '+this.name);}};
//var p2={name:'Ria',sayName:function(){console.log('im '+this.name);}};

//var name='WINDOW';
//
//function sayNameForAll(){
//	console.log('im '+this.name);
//}
//

// static function-binding
//------------------------

//var p1={name:'Nag',sayName:sayNameForAll};
//var p2={name:'Ria',sayName:sayNameForAll};
//
//
//sayNameForAll(); // im ?    // function-invocation ( this --> globa-obj )
//p1.sayName();    // im Nag  // method-invocation   ( this --> invoker-obj )
//p2.sayName();    // im Ria
//


//--------------------------------------

// dynamic function/method binding
//-------------------------


var p1={name:'Nag'};
var p2={name:'Ria'};


var greetUtil={
		sayName:function(message,from){
			console.log(message+' im '+this.name+":"+from);
		}
};

//greetUtil.sayName();


//a.eager invocation
//
//greetUtil.sayName.call(p1,"Hello","BLR");
//greetUtil.sayName.call(p2,"Hi","CHN");
//
//greetUtil.sayName.apply(p1,["Hello","BLR"]);
//greetUtil.sayName.apply(p2,["Hi","CHN"]);


//b. lazy ( on-event )invocation

var newF=greetUtil.sayName.bind(p1,"Hello","BLR");

// on-event
newF();

