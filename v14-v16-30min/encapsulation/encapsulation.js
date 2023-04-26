var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//accessModifier public/private/protected/readOnly/
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
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(userName, age, studentId) {
        var _this = _super.call(this, userName, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    Student.prototype.display = function () {
        console.log("username:".concat(this.userName, ", age:").concat(this.age, ", id:").concat(this.studentId));
    };
    Student.prototype.setStudentId = function (studentId) {
        this.studentId = studentId;
    };
    Student.prototype.getStudentId = function () {
        return this.studentId;
    };
    return Student;
}(Users));
var Student1 = new Student("lina", 35, 101);
Student1.display();
//class object
//user1 -name: lina, age:33
//user2 -name: kashif, age:9
// let user11 = new Users("Lina Haque", 33);
// user11.display();
var users1 = new Users("Fahi", 33);
//users1.userName = "pinky";
console.log(users1);
// users1.display();
var student1 = new Student("keya", 31, 23212);
student1.setStudentId(12345);
console.log(student1.getStudentId());
