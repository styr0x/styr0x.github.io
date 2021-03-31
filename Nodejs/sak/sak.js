class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age;
    }
}

let person1 = new Person("Thomas", "Nylund", 26);
let person2 = new Person("Börje", "Nylund", 63);

console.log(person1);
console.log(person2);