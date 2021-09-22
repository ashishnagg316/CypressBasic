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

//converting string to int
let date1 = '23'
let date2 = '28'
let diffDate = parseInt(date2-date1)
console.log(diffDate)
//converting back to string
console.log(diffDate.toString())

//String concat
let newDay = day + "is funday"
console.log(newDay)

//number of occurrences
let count = 0
let value = newDay.indexOf("day")
console.log(value)

while(value!== -1)
{
    count++
    value=newDay.indexOf("day",value+1)
}
console.log(count)