for (let i = 0 ; i <= 5 ; i++) {
    console.log("This is For loop")
}

const array1 = [5,10,15,20,25]
for (data of array1) { // for ... of
    // data = 5
    console.log(data)
}

const object1 = {a:2,b:3,c:9}
for (data in object1) {
    console.log(object1[data])
}


// const student = {    
//     firstname: "Foton",    
//     lastname: "Rakpinit",    
//     age: 21,
// } for (property in student) {    
//     console.log(student[property])}


let counter = 0 //1
do {
    console.log(counter)
    counter++
}
while (counter < 5) ;





let messageCount = 0
while (messageCount < 5) {
    console.log("Hello")
    messageCount++
}
