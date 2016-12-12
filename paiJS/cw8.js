function Computer (name, price, speed, owner) {
    this.name = name
    this.price = price
    this.speed = speed
    this.owner = owner
}

function Person(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    
    this.setName = function (firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    this.getFullName = function () {
        return this.firstName + ' ' + this.lastName
    }
}

var person = new Person('Jan', 'Kowal', 20)
var computer = new Computer('Del', 1200, 50, person)