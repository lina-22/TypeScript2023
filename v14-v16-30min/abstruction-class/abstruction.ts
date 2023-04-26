abstract class Users {
  //properties, methods, constructor
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  abstract display(): void;
}

class Student extends Users {
  studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }

  display(): void {
    console.log(
      `username:${this.userName}, age:${this.age}, id:${this.studentId}`
    );
  }
}

let Student1 = new Student("lina", 35, 101);
Student1.display();

//class object
//user1 -name: lina, age:33
//user2 -name: kashif, age:9

// let user11 = new Users("Lina Haque", 33);
// user11.display();
