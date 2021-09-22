//var a = [4,5,6,5,4,6,4,2,3,8,3,8]
//var ab = []

var a = "Ashish"
var ab = ""
for(let i = 0;i<a.length;i++)
{
    let k=0
    if(!ab.includes(a[i]))
    {
        
        ab[i] = a[i]
        k++
    
        for(let j=i+1;j<a.length;j++)
        {
            if(a[i] == a[j])
            {
            k++
            }
        }
        console.log("Number = "+a[i]+" - "+k+"times")
        if(k == 1)
        {
        console.log("Unique number ="+a[i])
        }
    }    
}