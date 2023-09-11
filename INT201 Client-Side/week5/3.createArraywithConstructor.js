//3.create array with Array () constructor
//3.1 with empty parameter
const x = new Array() //x=[]
console.log(x)
console.log(x.length)

//3.2 with initial size of array
const y = new Array(5)
console.log(y) //[]
console.log(y.length) //5

//3.3 with initial value
const z = new Array(1, 3, 5, 7)
console.log(z) //[1, 3, 5, 7]
console.log(z.length) //4