var users;
users = [];
var user1;
user1 = { userName: "Lina", userId: 101 };
users.push(user1);
console.log(users);
var user2;
user2 = { userName: "Haque", userId: 102 };
users.push(user2);
console.log(users);
var user3;
user3 = { userName: "Kashif", userId: 103 };
users.push(user3);
var getRequest;
getRequest = "GET";
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("GET");
