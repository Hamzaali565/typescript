// String
let greeting: String = "Hello ";
greeting.toLowerCase();

// Number
let num: Number = 0;

let numbr = 432432;

// numbr = "fsdf" // Error: Type 'string' is not assignable to type 'number'.
// when you assign number to a variable TS is smart enough to remind you while -
// you assign other Datatype to same variable i.e it only except number.

// Boolean
let falsee: boolean = false;
// falsee. you will get all methods available in JS.

// any

let name;

function iName() {
  return "thor";
}
name = iName();

// When we dont define any type to a variable typescript set it as 'any', which remove strictness of typescript.

export {};
