
module.exports = class personID //to import this class
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
//don't create class objects if you are exporting class