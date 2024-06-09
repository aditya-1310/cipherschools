// Object literal
let person = {
    firstName: "Shantanu",
    lastName: "Shubam",
    getFullName: function(){
      return "The name of the person is " + person.firstName + " " + person.lastName;
    },
    phoneNumber: {
      mobile: "12345",
      landline: "6789"
    },
  };
  
  console.log(person.getFullName());
  console.log(person.phoneNumber.landline);
  
  // Constructor function
  function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  let person1 = new Person("Shantanu","Shubam");
  let person2 = new Person("Anurag","Mishra");
  
  console.log(person1.firstName);
  console.log(person2.firstName + " " + person2.lastName);
  
  // Prototype object
  const coder = {
    isStudying: false,
    printIntroduction: function(){
      console.log("My name is " + this.name + " am studying?: " + this.isStudying);
    },
  };
  
  const me = Object.create(coder);
  me.name = "Shantanu Shubam";
  me.isStudying = true;
  me.printIntroduction();
  
  // Class
  class Vehicle{
    constructor(name, maker, engine){
      this.name = name;
      this.maker = maker;
      this.engine = engine;
    }
  
    getDetails(){
      return 'The name of the vehicle is ' this.name;
    }
  };
  
  let vehicle1 = new Vehicle("Creta","Hyundai","2500cc");
  let vehicle2 = new Vehicle("Q5","Audi","3000cc");
  
  console.log(vehicle1.name);
  console.log(vehicle2.maker);
  console.log(vehicle1.getDetails());
  
  // Constructor function with prototype
  function Vehicle(name, maker, engine){
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
  
  Vehicle.prototype.getDetails = function(){
    return "The name of the vehicle is " + this.name;
  }
  
  let vehicle3 = new Vehicle("Creta","Hyundai","2500cc");
  let vehicle4 = new Vehicle("Q5","Audi","3000cc");
  
  console.log(vehicle3.name);
  console.log(vehicle4.maker);
  console.log(vehicle3.getDetails());
  
  // Class with inheritance
  class Person{
    constructor(name, id){
      this.name = name;
      this.id = id;
    }
  
    addAddress(newAddress){
      this.address = newAddress;
    }
  
    getDetails(){
      console.log("Name is: " + this.name + " and the address is: " + this.address);
    }
  }
  
  let person3 = new Person("Shantanu", 24);
  person3.addAddress("Kolkata");
  person3.getDetails();
  
  // Class with private method
  class Person{
    constructor(firstName, lastName){
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    getDetails_Access(){
      return "The first name is: " + this.firstName + " and last name is: " + this.lastName;
    }
  
    // Private method
    getDetails_NoAccess(){
      return "The first name is: " + this.firstName + " and last name is: " + this.lastName;
    }
  }
  
  let person4 = new Person("Shantanu", "Shubham");
  
  console.log(person4.firstName);
  console.log(person4.getDetails_NoAccess()); // Error: person4.getDetails_NoAccess is not a function
  console.log(person4.getDetails_Access());
  
  // Class with inheritance and private method
  class Person{
    constructor(firstName, lastName){
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    getDetails_Access(){
      return "The first name is: " + this.firstName + " and last name is: " + this.lastName;
    }
  
    // Private method
    getDetails_NoAccess(){
      return "The first name is: " + this.firstName + " and last name is: " + this.lastName;
    }
  }
  
  class Student extends Person{
    constructor(firstName, lastName, rollNumber){
      super(firstName,lastName);
      this.rollNumber = rollNumber;
    }
  
    getDetails_Access(){
      return "The first name is: " + this.firstName + " and last name is: " + this.lastName + " and the roll number is: " + this.rollNumber;
    }
  }
  
  let person5 = new Person("Shantanu", "Shubham");
  
  console.log(person5.firstName);
  console.log(person5.getDetails_NoAccess()); // Error: person5.getDetails_NoAccess is not a function
  
  let student1 = new Student("Anurag","Mishra", 20);
  console.log(student1.getDetails_Access());