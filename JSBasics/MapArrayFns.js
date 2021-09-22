// Create a separate array of even numbers and multiply it with 3
var scores = [20,34,18,55,99,22]
var evenScores = scores.filter(score=>score%2==0)
console.log(evenScores)
//Here map converts 1 into another
var multipleScores = evenScores.map(score1=>score1*3)
console.log(multipleScores) 

//create a separate array of even number + multiply with 3 + sum it up
var ultimateArray = scores.filter(score=>score%2==0).map(score2=>score2*3).reduce((sum,score3)=>sum+score3,0)
console.log(ultimateArray)
