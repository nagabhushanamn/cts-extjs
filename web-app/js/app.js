/**
 * http://usejsdoc.org/
 */

// find DOM elements and register event listeners

var hideBtn = document.querySelector('.btn-danger');
var showBtn = document.querySelector('.btn-primary');
var box = document.querySelector('.jumbotron');

hideBtn.addEventListener('click', function(e) {
	box.style.display = 'none';
}, false);
showBtn.addEventListener('click', function(e) {
	box.style.display = 'block';
}, false);