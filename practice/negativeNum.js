// In this simple assignment you are given a number and have to make it negative. 
// But maybe the number is already negative?

function makeNegative(num) {
  if ( num > 0 ) {
        return -num;
    }
    else {
        return num;
    }
}

function makeNegative(num) {
  return -Math.abs(num);
}

function makeNegative(num) {
  return num > 0 ? -num : num;
}

function evenOrOdd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
}

// --------------------------------------------
// Implement a function which convert the given boolean value into its string representation.

function booleanToString(b){
  return b ? 'true' : 'false';
}

function booleanToString(b){
  return b ? 'true' : 'false';
}

function booleanToString(b){
  if (b === true) {
    return "true"
  } else {
    return "false"
  }
}

console.log(65%2)
