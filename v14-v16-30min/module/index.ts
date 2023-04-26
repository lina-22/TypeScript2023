// import { studentName as name, studentAge as age } from "./student";
import * as student from "./student";
function displayStudentInfo(): void {
  console.log(`${student.studentName}, ${student.studentAge}`);
}

displayStudentInfo();
