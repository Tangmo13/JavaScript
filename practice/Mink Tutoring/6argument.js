// Array-like
function test() {
  console.log(arguments)
  
}

test(1, 2, 8, 'a', 'k')

console.log('-------------------')

function test2(x, y, z) {
  if (arguments.length !== 3) return false
  return true
}

console.log(test2(1, 2, 3))
console.log(test2(1, 2))
