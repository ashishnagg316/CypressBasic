let letter = 65
for(let i=0;i<5;i++)
{
    for(let j=0;j<5-i;j++)
    {
        process.stdout.write(String.fromCharCode(letter+j)+"")
    }
    console.log("")
}
for(let i=0;i<5;i++)
{
    for(let j=0;j<=i;j++)
    {
        process.stdout.write(String.fromCharCode(letter+j)+"")
    }
    console.log("")
}