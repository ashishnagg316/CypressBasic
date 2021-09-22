let s = "Hello"
let r = ""
for(let i =s.length-1;i>=0;i--)
{
    r=r+s.charAt(i)
}
process.stdout.write(r+"")
console.log("")
if(s == r)
{
    console.log("Palindrome")
}
else
(
    console.log("not a palindrome")
)