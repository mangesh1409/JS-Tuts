console.log("Object Orientation in JS ES6");

/* Class Declaration    */

class Employee {

    name;experirnce;role;

    constructor(givName, givExperience, givRole) {
        this.name = givName;
        this.experirnce = givExperience;
        this.role = givRole;
    }

    slogan(){
        return `I am ${this.name} & this is best company`;
    }
    static add(a,b){
        return a+b;
    }
}

/* Object creation  */

let em1=new Employee("Harry",2,"Manager");
console.log(em1);
console.log(em1.slogan());
console.log(Employee.add(45,20));

/* Inheritance  */

class Programmer extends Employee{

    Langauge;
    
    constructor(givName, givExperience, givRole, givLan){
        super(givName, givExperience, givRole);
        this.Langauge=givLan;
    }
    
}

let pro1=new Programmer("Rohan",4,"Programmer","JavaScript");
console.log(pro1);