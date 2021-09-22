const flag = true


//if condition
if(!flag)//const flag value can be changed in conditional expression
{
    console.log("Flag is true")
}
else
{
    console.log("Flag is false")
    console.log(flag)
    //here even though "flag" is negated in the expression, the value doesn't change due to "const" declaration
}
let i =0
while(i<10)//if condition matches then only it enters while loop
{

    i++
    console.log(i)
}
console.log("************")
let b =0
do
{
    //statements executes first if condition is matched or not
    b++
}while(b>10);
console.log(b)
console.log("************")

for(let a=0;a<=10;a++)
{
    if(a%2 == 0 && a%5 == 0)
    {
        console.log(a)
    }
}

console.log("************")

console.log("************")


console.log("************")
let e = "Ash567ish"
e.replace([0-9]+"");
console.log(e)