// built-in data type: number, string, boolean, void, undefined, null

let userId: number;
userId = 121;
let firstName = "Lina";
let lastName = " Haque";
let userName: string;
let fullName: string;
let isActivated: boolean;

fullName = firstName.concat(lastName);
console.log(fullName);

userName = "Lina22";
isActivated = true;

console.log(
  `Your id :${userId}, userName: ${userName}, account activated: ${isActivated}`
);

console.log(fullName.split(" "));
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());
