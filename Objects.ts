// create your own type
type User = {
  name: string;
  email: string;
  isPaid: boolean;
};

function createUserOfmyType(user: User): User {
  return { name: user.name, email: user.email, isPaid: user.isPaid };
}

createUserOfmyType({ name: "2", isPaid: false, email: "hamza@gmail.com" });

type newUser = {
  readonly _id: string; // if you trying to change _id it will throw you error
  name: string;
  email: string;
  isPaid: boolean;
  credDetails?: string; //whether you pass it or not it will never throw error to you
};

let name: newUser = {
  _id: "1234567890",
  name: "Hamza",
  email: "hamza@gmail.com",
  isPaid: false,
};
// name._id ='123' // throwing you error

name.isPaid = false;

export {};
