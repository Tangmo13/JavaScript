//5. create array with Array.from()
const x = [1, 2, 4, 8, 16, 32]
const y = Array .from(x)
console.log(x)
console.log(y)
console.log(y.length)
//memory address of x equals to memory address of y
if (x === y) console.log('x===y')
else console.log('x!==y') //x!==y