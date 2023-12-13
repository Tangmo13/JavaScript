//? Destructuring, Rest, Spread

//! Array

const myArray = [45.5, 160, 20, 'Female']

const [weight, height, ...rest] = myArray //* global scope & destructuring & order is effective

console.log(weight)
console.log(height)
console.log(rest) // เก็บเป็น array

const Tangmo = []

for (data of myArray) {
  Tangmo.push(data)
}

Tangmo[2] = 21

console.log(Tangmo)
console.log( myArray)

console.log('-------------------------')

const arrA = ['H', 'e', 'l']
const arrB = ['l', 'o']

const arrC = [...arrA, ...arrB]

console.log(arrC)
console.log('-------------------------')


//! Object

const student = {
  id: '65130500068',
  fullname: 'Ratikorn Tangmo',
  age: 20,
  degree: 'bachelor',
  education: {
    university: {
      abbr: 'KMUTT',
      name: 'King '
    }
  },
  department: 'SIT',
  major: 'IT'
}

//* ลำดับไม่มีผล
// const {id, name: nickname, age} = obj
// console.log(obj.age)
// console.log(obj.id)
// console.log(obj.name)
// console.log(nickname)

// const {education: {university: {abbr, name}, department}} = obj

const {id, fullname, age, ...education} = student
console.log(student)





