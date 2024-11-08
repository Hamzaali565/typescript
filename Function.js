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
var logError = function (msg) {
    console.log(msg);
    // if function does not return any thing use void
};
var handleError = function (msg) {
    throw new Error(msg);
    // never means function will never return anything
};
var createUser = function (_a) {
    var string = _a.name, boolean = _a.isPaid;
};
createUser({ name: 32, isPaid: false });
