// Q-1
// ---------------------------------------------------------------------------------------------------------------------
class Person {
  constructor(userName, age, country) {
    this.userName = userName;
    this.age = age;
    this.country = country;
  }

  displayData() {
    console.log(`Name: ${this.userName}`);
    console.log(`age: ${this.age}`);
    console.log(`country: ${this.country}`);
  }
}

let mokshil = new Person("mokshil", 19, "aus");
let dev = new Person("xyzz", 25, "India");

// console.log("moskshil:");

mokshil.displayData();

// Q-2
// ---------------------------------------------------------------------------------------------------------------------
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  calcArea() {
    return this.width * this.height;
  }
  calcperi() {
    return 2 * (this.width + this.height);
  }
}
let ans = new Rectangle(5, 6);
console.log(`width: ${ans.calcArea()}`);
console.log(`height: ${ans.calcperi()}`);

// Q-3
// ---------------------------------------------------------------------------------------------------------------------

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayDetails() {
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
  }

  displayDetails() {
    super.displayDetails();
    console.log(`Doors: ${this.doors}`);
  }
}
let vehicle = new Vehicle("BMW", "x9", 2025);
console.log("Vehicle Details:");
vehicle.displayDetails();

let car = new Car("kia", "seltos", 2023, 4);
console.log("Car Details:");
car.displayDetails();

// Q-4
// ---------------------------------------------------------------------------------------------------------------------



class BankAccount {
  constructor(accountNumber, balance = 0) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited $${amount} to account ${this.accountNumber}. New balance: $${this.balance}`);
    } else {
      console.log("Deposit amount must be greater than zero.");
    }
  }

  withdraw(amount) {
    if (amount <= 0) {
      console.log("Withdrawal amount must be greater than zero.");
    } else if (amount > this.balance) {
      console.log(`Insufficient funds for account ${this.accountNumber}. Available balance: $${this.balance}`);
    } else {
      this.balance -= amount;
      console.log(`Withdrew $${amount} from account ${this.accountNumber}. New balance: $${this.balance}`);
    }
  }

  displayBalance() {
    console.log(`Account ${this.accountNumber} balance: $${this.balance}`);
  }
}

// Example usage
const account1 = new BankAccount('123456');
account1.displayBalance();        
account1.deposit(500);          
account1.withdraw(150);          
account1.withdraw(400);           
account1.displayBalance();      

const account2 = new BankAccount('7891011', 1000);
account2.deposit(250);
account2.withdraw(300);
account2.displayBalance();



// Q-5
// ---------------------------------------------------------------------------------------------------------------------

//Doubt

// Q-6
// ---------------------------------------------------------------------------------------------------------------------

//Doubt





