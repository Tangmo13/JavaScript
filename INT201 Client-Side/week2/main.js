function greeting(someone) {
    return 'hello, ' + someone  //method 1
    //method 2 ; use backtick
    return `hello, ${someone}`
}
console.log('Good Morning')
let name = 'Ratikorn Damgurnglabpanavanit'
console.log(name)
const totalStudent = 70
name = 100 //dynamic and weakly type
console.log(name)

console.log('My name is Ratikorn Damgurnglabpanavanit')
console.log(greeting('Ratikorn Damgurnglabpanavanit'))
console.log('Good Bye')
const obj = {id: 101}
const std = { id: 65130500068, name: 'Tangmo'}  //object is a collect of properties
//one property contains key and value (key:value)
// std = obj
std.name = 'Somying'
console.log(std)
const nums = [5, 10, 15, 20]  //array
console.log(nums)

const i = 5
i = 10