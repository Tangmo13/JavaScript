let a = 1
function x() {
  console.log(a, b)
}
// x() -> error: Cannot access 'b' before initialization
let b = 5
x() //1, 5
//อยู่ที่ว่า fuction ถูกเรียกเมื่อตอนไหน