function sayGoodBye() {
  return 'Good Bye!'
}

function doSmth() {
  return sayGoodBye
}

let doIt = doSmth()

console.log(doIt) // [Function: sayGoodBye]

console.log('----------------------')

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result = a
