"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { studentName as name, studentAge as age } from "./student";
var student = require("./student");
function displayStudentInfo() {
    console.log("".concat(student.studentName, ", ").concat(student.studentAge));
}
displayStudentInfo();
