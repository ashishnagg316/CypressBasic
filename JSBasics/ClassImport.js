
const personID = require('./ClassBase')//class is imported

let day = "tuesday "
//length of string
console.log(day.length)
//substring
console.log(day.slice(4,7))
//spliting string
let split = day.split("s")
console.log(split[0])
console.log(split[1])
//trim spaces
console.log(split[1].trim().length)

//create object of the class
let personID3 = new personID("Ashish","Nag")
console.log(personID3.fullName())