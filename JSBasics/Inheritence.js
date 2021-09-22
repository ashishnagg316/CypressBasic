const personID = require('./ClassBase')
class Student extends personID
{
    //if parent class has constructor then child class should also have constructor
    constructor(firstName,lastName)
    {
        //call parent class constuctor
        super(firstName,lastName)
    }
    //overriding
    get location()
    {
        return "College"
    }
}

let student = new Student("Ashish","Nag")
console.log(student.fullName())
console.log(student.location)