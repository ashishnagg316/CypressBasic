//A way of declaring array
var marks = Array(6)
var marks = new Array(20,34,18,55,99,22)

//another way of declaring Array
var marks = [20,34,18,55,99,22]
console.log(marks[2])
//replace value
marks[3] = 14
console.log(marks)
//add an element to last of array
marks.push(65)
console.log(marks)
//delete an element from the array = deletes last item
marks.pop()
console.log(marks)
//add element to start of array
marks.unshift(12)
console.log(marks)
console.log("Length of Array = "+marks.length)
//index value
console.log(marks.indexOf(5))
//using "includes" to search in array
console.log(marks.includes(120))
//create a sub array
var subMarks = marks.slice(2,5)
console.log(subMarks)
