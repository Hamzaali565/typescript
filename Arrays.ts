const numArray: number[] = [];
numArray.push(0);

// also to define type
const stringArray: Array<string> = [];
stringArray.push("hello");

// push object to arrarys
type User = {
  name: string;
  age?: number;
};
const userArray: Array<User> = [];

// array inside array
const arrayInside: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

userArray.push({ name: "2" });

export {};
