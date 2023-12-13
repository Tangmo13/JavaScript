//! additional assignment

// let arr = [1, 2, 3, 4, 5]

// function recieve(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
//   }
// }

// recieve(arr)

//? -----------------------------------

let mixedArray = [
  42,
  "Hello, World!",
  null,
  undefined,
  3.14,
  null,
  "OpenAI",
  undefined,
  true,
  null,
  null,
  undefined,
  "End of array"
];

//? -----------------------------------

// function recieve(arr) {
//   let count = 0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === null || arr[i] === undefined) {
//       ++count
//     }
//   }
//   return count
// }

// console.log(recieve(mixedArray))

//? -----------------------------------

// function plus(sum1, sum2) {
//   return sum1 + sum2
// }

// console.log(plus(3, 4))

//? -----------------------------------

// function multiply(num) {
//   for (let i = 0; i < 13; i++) {
//     console.log(num * i)
//   }
// }

// multiply(2)

//? -----------------------------------

function animal(str, num) {
  let add = ''
  for (let i = 0; i < num; i++) {
    add += str
  }
  return add
}

console.log(animal('bunny', 3))