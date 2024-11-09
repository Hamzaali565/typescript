// variaable accepting 2 types of data.
let dualType: string | number = "alpha";
dualType = 0;

//
type user = {
  name: string;
};

type admin = {
  userName: string;
};

let userType: user | admin = { name: "hamza" };
userType = { userName: "hamza" };

//
function databaseId(id: string | number) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
  return id;
}

databaseId(10);

// arrays
const numRay: Array<number> = [1, 2, 3];
const stiRay: Array<string> = ["1", "2", "3"];
let num_str: (number | string)[] = [1, 2, "43"];

// strings
let areoplaneSeats: "Aisle" | "middle" | "wndow";
areoplaneSeats = "Aisle";
// areoplaneSeats = "SideSeat" // this will throw you error because types could be among "Aisle" |"middle"|"wndow"
//
