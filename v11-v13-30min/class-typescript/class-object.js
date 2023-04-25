var Users = /** @class */ (function () {
    function Users(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    Users.prototype.display = function () {
        console.log("username:".concat(this.userName, ", age:").concat(this.age));
    };
    return Users;
}());
//class object
//user1 -name: lina, age:33
//user2 -name: kashif, age:9
var user11 = new Users("Lina Haque", 33);
user11.display();
