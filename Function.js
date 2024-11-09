"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Number Type
var add2 = function (num) {
    return num + 2;
};
add2(3);
// String Type
var characString = function (val) {
    return val.length;
};
// more values
var signUp = function (name, password, isPaid) { };
// more values and default value
var signUp2 = function (name, password, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var add2Duplicate = function (num) {
    return num + 2;
    //   return "hello"; //describe the type of function to number so it will accept only number as return value
};
// if function does not return anything
var logError = function (msg) {
    console.log(msg);
    // if function does not return any thing use void
};
// function who never return any thing
var handleError = function (msg) {
    throw new Error(msg);
    // never means function will never return anything
};
// definition of parameters type.
function createUser(_a) {
    var name = _a.name, isPaid = _a.isPaid;
}
// it will take parameter according to defined type.
createUser({ name: "32", isPaid: false });
// how to define type of return parameters
var returnObj = function () {
    return { name: "32", isPaid: false };
};
function createUserOfmyType(user) {
    return { name: user.name, email: user.email, isPaid: user.isPaid };
}
createUserOfmyType({ name: "2", isPaid: false, email: "hamza@gmail.com" });
