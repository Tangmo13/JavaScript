// function plus(num1, num2) {
//   return num1 + num2 // let plus(2, 4) = 6
// }

// console.log("Answer = " + plus(2, 4))

// function find(arr, num) {
//   return arr[num]
// }

// console.log(find(mixedArray, 3))
// console.log(find(mixedArray, 4))
// console.log(find(mixedArray, 5))

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

// function recieve(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
//   }
// }
// recieve(mixedArray)


// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function multiply(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i] * num)
//   }
// }
// multiply(nums, 2)

// function add(num) {
//   return num * 2
// }

// console.log(add(2))

console.log('---------------')
// for ... of

// function add(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
//   }
// }
// add(nums)

// function add(arr, num) {
//   for (const a of arr) {
//     console.log(a * num)
//   }
// }

// add(nums, 4)

console.log('-----------')

function falseCount(arr) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === undefined || arr[i] === null) {
      ++count
    } // else {
    //   count
    // }
  }
  return count
}
console.log(falseCount(mixedArray))

//! break for loop

// function breakArray(arr) {
//   for (const a of arr) {
//     if (a === null) {
//       break
//     } else {
//       console.log(a)
//     }
//   }
// }
// breakArray(mixedArray)

//! additional assignment

// let a = 0
// a = a + 1

// console.log(a)

// let str = 'abc'
// let strArray = ['a', 'b', 'c']
// for (const char of str) {
//   console.log(char)
// }

'aa'
'bb'
'cc'
'dd'