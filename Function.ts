// Number Type
let add2 = (num: number) => {
  return num + 2;
};
add2(3);

// String Type
let characString = (val: string) => {
  return val.length;
};

// more values
let signUp = (name: string, password: string, isPaid: boolean) => {};

// more values and default value
let signUp2 = (name: string, password: string, isPaid: boolean = false) => {};

let add2Duplicate = (num: number): number => {
  return num + 2;
  //   return "hello"; //describe the type of function to number so it will accept only number as return value
};

// if function does not return anything
const logError = (msg: string): void => {
  console.log(msg);
  // if function does not return any thing use void
};

// function who never return any thing
const handleError = (msg: string): never => {
  throw new Error(msg);
  // never means function will never return anything
};

// definition of parameters type.
function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {}
// it will take parameter according to defined type.
createUser({ name: "32", isPaid: false });

// how to define type of return parameters
const returnObj = (): { name: string; isPaid: boolean } => {
  return { name: "32", isPaid: false };
};

export {};
