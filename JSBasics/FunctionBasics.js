//function is a block of code
function add(a,b)
{
    return a+b
}
let c = add(3,2)
console.log(c)

//Anonymus fn => Fn. dont have a name
//Anonymus fn can be assigned to variables

let sum = function(a,b)
{
    return a+b
}
console.log(sum(2,3))

//in Anonymus fn function() can be replaced with fat pipe "=>" shorthand operator
let total = (a,b)=>a+b
console.log(total(2,3))

//var is not in block scope, its in function scope
function sub1(a,b)
{
   return a-b
    var sub1 // scope dies within fn
}
let m = sub1(3,2)
console.log(m)