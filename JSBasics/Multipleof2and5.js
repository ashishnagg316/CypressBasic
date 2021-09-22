
let b=0
for(let a=1;a<=50;a++)
{
    if(a%2 == 0 && a%5 == 0)
    {
        console.log(a)
        b++
        if(b == 3)
        {
            break
        }
    }
}