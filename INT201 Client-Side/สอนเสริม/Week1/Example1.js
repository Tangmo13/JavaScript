// Using switch to show Subject detail

// case   : console.log
// INT201 : "Client Side"
// INT202 : "Server Side"
// INT205 : "Database Management"
const Subject = "INT214"
switch (Subject) {
    case ("INT201") : {
        console.log("Client Side")
        break
    }
    case ("INT202") : {
        console.log("Server Side")
        break
    }
    case ("INT205") : {
        console.log("Database Management")
        break
    }
    default : break
}




// Now try using If-Else to show Subject detail
if (Subject === "INT201") {
    console.log("Client Side")
} else if (Subject === "INT202") {
    console.log("Server Side")
} else if (Subject === "INT205") {
    console.log("Database Management")
} else {
    console.log("What subject?")
}




// Did you see any difference between Switch and If-Else?

//Not really ;-;



const students = ["Kongphop", "Jittra", "Suksawat", "Supa", "Wanchana", "Walaiporn", "Pasutorn"]
// Make a For Loop program that say "Greeting <student_name>" all students
for (let Name in students) { //ใส่ let เพื่อความชัวร์
    console.log("Greeting " + students[Name])
}

for (N of students) {
    console.log("Greeting" + Name)
}




const dataSet1 = ["Male", "Female", "Female", "Female", "Male", "Male", "Male", "Female", "Male", "Female", "Male", "Female", "Male", "Female", "Male", "Female", "Male", "Female", "Male"]
// Make a program that can count "Male" and "Female" in dataSet
// And then console.log how many count in "Male" and "Female"
// "Male : xx"
// "Female : xx"
let maleCount = 0 // -> ประกาศไว้เพื่อนับตัวเลขเฉยๆ
let femaleCount = 0
for (value of dataSet1) {
    if (value === "Male") {
        maleCount++
    }else if (value === "Female") {
        femaleCount++
    }
}
console.log(maleCount)
console.log(femaleCount)