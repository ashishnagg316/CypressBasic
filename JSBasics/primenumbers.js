let pn = ""
for(let i = 1;i<=100;i++)
{
    let counter = 0
    for(let num = i;num>=1;num --)
    {
        if(i%num == 0)
        {
            counter = counter+1
        }
    }
    if(counter == 2)
    {
        pn=pn+i+","
    }
    
}
console.log("prime numbers = "+pn)