var z=1
for(let k=1;k<5;k++)
{
    for(let l=1;l<=5-k;l++)
    {
        process.stdout.write(z+"");//to print in a line
        //console("\t")
        z++
    }
    console.log("")
}
var z=1
for(let k=1;k<5;k++)
{
    for(let l=1;l<=k;l++)
    {
        process.stdout.write(z+"")
        z++
    }
    console.log("")
}