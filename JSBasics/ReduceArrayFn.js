var a = [20,34,18,55,99,22]
let sum = 0;
for(let i =0;i<a.length;i++)
{
    sum = sum+a[i]
}
console.log(sum) 

// This above code can be written using reduce array function
//reduce is used to tieing or summing up values
let total = a.reduce((sum,b)=>(sum+b),0)
console.log(total)

let total1 = a.reduce((sum,c)=>sum-c,0)
console.log(total1)