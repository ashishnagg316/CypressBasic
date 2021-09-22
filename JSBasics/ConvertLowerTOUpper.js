let convert = function(str)
{
    
    var a =[]
    for(let i =0;i<str.length;i++)
    {
        var char = str.charAt(i)
        if(char == char.toUpperCase())
        {
            a=a+char.toLowerCase()
        }
        else
        {
            a=a+char.toUpperCase()
        }
    
    }
    return a

}
console.log(convert("AsHiSh NaG"))