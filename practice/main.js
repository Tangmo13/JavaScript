// Create a function addFive without any arguments. 
// This function adds 5 to the sum variable, but its returned value is undefined.

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum += 5
}

// Only change code above this line

addThree();
console.log(sum)

addFive();
console.log(sum)

console.log('------------------------')

function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if (wasThatTrue) {
    return "Yes, that was true"
  }
  return "No, that was false"
  // Only change code above this line

}

console.log(trueOrFalse(true))
console.log(trueOrFalse(false))

console.log('-----------------')

// function basicOp(operation, value1, value2)
// {
//   if (operation === '+') {
//     return value1 + value2
//   } else if (operation === '-') {
//       return value1 - value2
//   } else if (operation === '*') {
//       return value1 * value2
//   } else if (operation === '/') {
//     return value1 / value2
//   } else return ''
// }

//? Sol 2 - better way

function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

console.log(basicOp('+', 2, 4))
console.log(basicOp('-', 2, 4))
console.log(basicOp('*', 2, 4))
console.log(basicOp('/', 2, 4))
console.log(basicOp(2, 4))


function updateLight(current) {
  switch (current) {
    case 'green':
      return 'yellow'
      break
    case 'yellow':
      return 'red'
      break
    case 'red':
      return 'green'
      break
  }
}

console.log(updateLight('red'))
