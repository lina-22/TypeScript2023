// users = [{ name: "1111" }];
// let userA: {
//   userName: string;
//   userId?: number;
// };
// userA = { userName: "lina" };
// console.log(userA);
//***************************** */

let users: object[];
users = [];
let user1: { userName: string; userId: number };
user1 = { userName: "Lina", userId: 101 };
users.push(user1);
console.log(users);
