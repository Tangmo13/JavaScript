// const animals = ['ant', 'dogs', 'cats', 'Bird']
// animals.sort()
// console.log(animals) //[ 'Bird', 'ant', 'cats', 'dogs' ]

// const nums = [5, 1, 10, 1000, 2, 3, 50]
// nums.sort()
// console.log(nums) //[1, 10, 1000, 2, 3, 5, 50]
// // เรียงเลข 1 ขึ้นมาก่อน แล้วค่อยไปเลข 2, 3...


//! Homework
const persons = [
  { id: 1, fullname: 'Susan Jo' },
  { id: 3, fullname: 'John Lee' },
  { id: 2, fullname: 'ann Smith' }
]
//return sorted array by fullname (ascending order and ignore case)
//[ { id: 2, fullname: 'ann Smith' },   
// { id: 3, fullname: 'John Lee' }, { id: 1, fullname: 'Susan Jo' },]

persons.sort((a, b) => {
  return a.fullname.localeCompare(b.fullname)
})
console.log(persons)