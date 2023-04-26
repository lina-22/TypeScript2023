//accessModifier public/private/protected/readOnly/
class Users {
  //properties, methods, constructor
  // public userName: string;
  //public age: number;

  // protected userName: string;
  userName: string;
  public age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log(`username:${this.userName}, age:${this.age}`);
  }
}

class Student extends Users {
  private studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }

  display(): void {
    console.log(
      `username:${this.userName}, age:${this.age}, id:${this.studentId}`
    );
  }

  setStudentId(studentId: number): void {
    this.studentId = studentId;
  }

  getStudentId(): number {
    return this.studentId;
  }
}

let Student1 = new Student("lina", 35, 101);
Student1.display();

//class object
//user1 -name: lina, age:33
//user2 -name: kashif, age:9

// let user11 = new Users("Lina Haque", 33);
// user11.display();
let users1 = new Users("Fahi", 33);

//users1.userName = "pinky";
console.log(users1);
// users1.display();

let student1 = new Student("keya", 31, 23212);
student1.setStudentId(12345);
console.log(student1.getStudentId());
