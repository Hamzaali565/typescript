"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUserOfmyType(user) {
    return { name: user.name, email: user.email, isPaid: user.isPaid };
}
createUserOfmyType({ name: "2", isPaid: false, email: "hamza@gmail.com" });
var name = {
    _id: "1234567890",
    name: "Hamza",
    email: "hamza@gmail.com",
    isPaid: false,
};
// name._id ='123' // throwing you error
name.isPaid = false;
