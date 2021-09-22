let grade = 0
var students = ["Ash","Mark","John"]//Array
var marks =[[10,20,30],[20,10,30],[30,20,10]]//2D Array

for(let i=0;i<students.length;i++)
{
    for(let j=0;j<marks.length;j++)
    {
        grade=grade+marks[i][j]
    }
    console.log(students[i]+"="+grade)
}