const studentScores = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'DAVID', score: 79 },
  { name: 'Charlie', score: 68 },
  { name: 'David', score: 55 },
  { name: 'Eve', score: 78 },
  { name: 'david', score: 85 }
]
// return student who has name equals to david with in casesensitive 
// and score more than 80

// David, david, DAVID

const found = studentScores.find(element => element.name = 'david')
console.log(found)

const foundIndex = studentScores.findIndex(
  (student) => student.name.toLowerCase() === 'eve' // callback
)
console.log(foundIndex) //5