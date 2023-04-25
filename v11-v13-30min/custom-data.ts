// users = [{ name: "1111" }];
// let userA: {
//   userName: string;
//   userId?: number;
// };
// userA = { userName: "lina" };
// console.log(userA);
//***************************** */
type User = { userName: string; userId: number };

let users: User[];
users = [];

let user1: User;
user1 = { userName: "Lina", userId: 101 };
users.push(user1);
console.log(users);

let user2: User;
user2 = { userName: "Haque", userId: 102 };
users.push(user2);
console.log(users);

let user3: User;
user3 = { userName: "Kashif", userId: 103 };
users.push(user3);
//console.log(users);

type RequestType = "GET" | "POST";

let getRequest: RequestType;
getRequest = "GET";

function requestHandler(requestType: RequestType) {
  console.log(requestType);
}

requestHandler("GET");
