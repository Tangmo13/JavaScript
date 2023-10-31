const students = [
    {
        id: 1,
        name: "Goodito Fujiko",
        age: 20
    },
    {
        id: 5,
        name: "Dimitri Petrenko",
        age: 22
    },
    {
        id: 10,
        name: "Rico Rodriguez",
        age: 21
    },
    {
        id: 3,
        name: "Lena Oxton",
        age: 28
    },
    {
        id: 2,
        name: "Mary Somers",
        age: 39
    }
]


// เขียน Loop function ที่จะอ่าน student ทุกตัวใน Array แล้วแสดงออกมาในรูปแบบที่คนอ่านได้
// ตัวอย่าง Format
// Profile : <id>, "<name>" age <age>
// Profile : 5, "Dimitri Petrenko" age 22
// Profile : 10, "Rico Rodriguez" age 21


// Guide
for (let student of students) {
    console.log("profile : " + student.id + ", " + student.name + " age " + student.age)
}