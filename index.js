function called() {
	return "called";
}

function reecivesAFunction(called) {
	called();
}

function identified() {
	return "named function";
}

function returnsANamedFunction() {
	identified();
}

var a = function() {
	return "anonymous function";
}

function returnsAnAnonymousFunction() {
	
	a();
}