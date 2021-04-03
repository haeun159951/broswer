// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(',');
  console.log(result);  // 
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(',');
  console.log(result);

}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.sort();  //reverse()
  console.log(result);
  console.log(array);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  
  const result = array.splice(0,2);
  console.log(result);  //1,2
  console.log(array); //3,4,5
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find(s => s.score === 90 );
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const reuslt = students.filter(s => s.enrolled === true);
  console.log(reuslt);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map(s => s.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  const result = students.some(s => s.score < 50);
  console.log(result);
  //every 모든 조건이 충족해야지 트루가 된다. 
}

// Q9. compute students' average score
{
  const sum = students.reduce((a, b) => a + b.score, 0);
  const avg  =  sum / students.length;
  console.log(avg);

}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'  
{
//map and split
  //const result = students.map(s => s.score).join(',');
  const result = students.map(student => student.score)
                         .filter(score => score >= 50) //조건을 추가 할 수 있음 계속 
                         .join(',');
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students.map(s => s.score).sort((a,b) => a - b).join();
  console.log(result);
}
