class personID
{
    
    age = 30
    //"get" keyword represents the property of the class
    get location()
    {
        return "Bangalore"
    }
    //constructor
    constructor(firstName,lastName)
    {
        this.firstName = firstName
        this.lastName = lastName
    }
    //methods = function without "get" keyword
    fullName()
    {
        return this.firstName+this.lastName
    }

}

let personID1 = new personID("Ashish", "Nag")
let personID2 = new personID("John", "Smith")
console.log(personID1.location)//for class property no need of ()
console.log(personID1.fullName())//for methods () is mandatory
console.log(personID2.fullName())