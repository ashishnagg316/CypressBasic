 // Create a separate array of even numbers
 var scores = [20,34,18,55,99,22]
 var evenScores=[]
 for(let i=0;i<scores.length;i++)
 {
     if(scores[i]%2 == 0)
     {
         //add values to new array
         evenScores.push(scores[i])
     }
 }
 console.log(evenScores)

 //now the above code can be written using filter array function
 //Filter operates only when condition is provided
 var EvenScores = scores.filter(score=>score%2 == 0)
 console.log(EvenScores)
