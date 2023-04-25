class Users {
  //properties, methods, constructor
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log(`username:${this.userName}, age:${this.age}`);
  }
}

//class object
//user1 -name: lina, age:33
//user2 -name: kashif, age:9

let user11 = new Users("Lina Haque", 33);
user11.display();
