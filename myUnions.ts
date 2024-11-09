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
//
