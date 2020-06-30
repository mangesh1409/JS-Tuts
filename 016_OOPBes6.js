console.log("Object Orientation in JS (Before ES6)");

/*  Object Literal  */
let car = {
    name: "Maruti 800",
    topspeed: 120,
    run: function () {
        console.log("Car is running");
    }

}

////////////////////////////////////////////////////////////

/* Constructor  */
function GeneralCar(givenName, givenSpeed) {
    this.name = givenName;
    this.speed = givenSpeed;
    this.run = function () {
        console.log(`${this.name} is runninhg`);
    };
}

/* Object Creation  */

let car1 = new GeneralCar('Nissan', 135);
let car2 = new GeneralCar('Mahindra', 145);
let car3 = new GeneralCar('Honda', 165);

console.log(car1, car2, car3);

/* Object Prototype*/

GeneralCar.prototype.getName = function () {
    return this.name;
}
GeneralCar.prototype.setName = function (newName) {
    this.name = newName;
}
GeneralCar.prototype.slogan = function () {
    return `${this.name} is best car.....`;
}

console.log(car1.slogan());

////////////////////////////////////////////////////////////

/* Object Creation Using Object Prototype   */

const proto = {
    slogan: function () {
        return "This is best";
    },
    changeName: function (newName) {
        this.name = newName;
    }
}

const obj = Object.create(proto);
obj.name = "Harry";
obj.role = "Manager";

console.log(obj);
console.log(obj.slogan());
obj.changeName("Rohan");
console.log(obj);

////////////////////////////////////////////////////////////

/* Inheritance Using Prototype  */

// Employee constructor
function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// Slogan
Employee.prototype.slogan = function () {
    return `This company is the best. Regards, ${this.name}`;
}

// Create an object from this constructor now
let harryObj = new Employee("Harry", 345099, 87);
console.log(harryObj.slogan())

// Programmer
function Programmer(name, salary, experience, language) {
    Employee.call(this, name, salary, experience);
    this.language = language;
}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;

let rohan = new Programmer("Rohan", 2, 0, "Javascript");
console.log(rohan);