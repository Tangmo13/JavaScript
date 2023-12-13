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

//? for...i
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

//? for...of
// function recieve(arr) {
//   let count = 0
//   for (let a of arr) {
//     if (a === null || a === undefined) {
//       ++count
//     }
//   }
//   return count
// }

// console.log(recieve(mixedArray))

//? array method

// function add(str) {
//   if (str === null || str === undefined) {
//     return true
//   }
//   return false
// }

// console.log(add(null))

console.log(mixedArray.filter((str) => {
  if (str === null || str === undefined) {
    return true
  }
  return false
}).length)


let obj = { cat: 1, bunny: 2, bird: 3, dog: 4 }

console.log(obj.cat)

for (a in obj) {
  console.log(obj[a])
}


