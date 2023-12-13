//! Array
// function operation() {
//   function sum(nums) {
//       return nums.reduce((a, b) => a + b)
//   }

//   function multiply(num, time) {
//       return num * time
//   }

//   return [multiply, sum]
// }

// const [multiply, sum] = operation()

// console.log(multiply(5,7))
// console.log(sum([5,7,8,4]))


//! Object
function operation() {
  function sum(nums) {
    return nums.reduce((a, b) => a + b)
  }
  
  function multiply(num, time) {
    return num * time
    }
  
  return {multiply, sum}
}
  
  const {multiply, sum} = operation()
  
  console.log(multiply(5,7))
  console.log(sum([5,7,8,4]))