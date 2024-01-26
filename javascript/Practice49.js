// Constructor function
function Person(name, age) {
    // Properties
    this.name = name;
    this.age = age;
  
    // Method
    this.sayHello = function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
  }
  
  // Creating an instance of the Person constructor
  let person1 = new Person("John", 25);
  
  // Calling the method on the instance
  person1.sayHello();