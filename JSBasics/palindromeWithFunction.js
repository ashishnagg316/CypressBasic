

 function reverse(str)
{
	var rev =""
	for(let i =str.length-1;i>=0;i--)
	{
	rev=rev+str.charAt(i)
	}
	console.log("reverse =" + rev)
	if( str == rev)
	{
		console.log("reverse string")}
	else
	{console.log("Not a reverse string")}
}
//to enter string at terminal
const prompt = require('prompt-sync')();
const string = prompt("Enter String:")

console.log(reverse(string))
