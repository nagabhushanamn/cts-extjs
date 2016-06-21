/**
 * http://usejsdoc.org/
 */

//function init() {
//
//	var count = 0; // private var
//
//	// public
//	return {
//		doCount : function() {
//			count++;
//		},
//		getCount : function() {
//			return count;
//		}
//	};
//}
//
//var counter = init();


// douglas crockford  --> IIFE or self exectable func


var counter=(function(){
	
			var count = 0; // private var
		
			// public
			return {
				doCount : function() {
					count++;
				},
				getCount : function() {
					return count;
				}
			};
})();


