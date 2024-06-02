//* Variables declared with let have Block Scope
//* Variables declared with let must be Declared before use
//* Variables declared with let cannot be Redeclared in the same scope

//* JavaScript had Global Scope and Function Scope.
//* These two keywords provided Block Scope in JavaScript:


//! Global Scope
//* Variables declared with the var always have Global Scope.
//* Variables declared with the var keyword can NOT have block scope:


// Scope	Redeclare	Reassign	Hoisted	Binds this
// var	    No	    Yes	    Yes	    Yes	       Yes
// let	    Yes	    No	    Yes	    No	        No
// const	Yes	    No	    No	    No	        No


//! What is Good?
//* let and const have block scope.
//* let and const can not be redeclared.
//* let and const must be declared before use.
//* let and const does not bind to this.
//* let and const are not hoisted.





