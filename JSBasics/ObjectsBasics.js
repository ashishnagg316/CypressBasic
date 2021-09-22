

//objects is a collection of properties
let personID = {

    firstName: "Ashish",
    lastName: "Nag",
    DOB: "1991",  
    //function can be added
    fullName : function()
    {
        return this.firstName+this.lastName
    }
}
//display fullName function
console.log(personID.fullName())
console.log(personID.firstName)
console.log(personID["lastName"])
//update Firstname
personID.firstName = "Ash"
console.log(personID.firstName)
//add property
personID.gender = "male"
personID.age = 30
console.log(personID)
//delete property
delete personID.DOB
console.log(personID)

//find the property exist in the object
//its return type is boolean
console.log('DOB' in personID)

//print all the values of JS object
for(let key in personID)
{
    console.log(personID[key])
}

