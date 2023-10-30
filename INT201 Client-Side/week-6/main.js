console.log('1.--------------------------------')
//1. create object with object literals
const st1 = {
    studentId: 651000101,
    firstname: 'Somchai',
    lastname: 'Sookjai',
    studentId: 1
  }

  console.log(typeof st1)
  console.log(st1)
  const st2 = {} //empty object {} === const st2=new Object()
  console.log(Object.prototype.isPrototypeOf(st2))
  console.log(typeof st2)

  console.log(Object.keys(st1)) //array of property key
  console.log(Object.values(st1)) //array of property value

  const st3 = { firstname: 'Suda', lastname: 'Jaidee', studentId: 651000102 }
  console.log(st3)

  //composite object : address object is nested in st4 object
  const st4 = {
    firstname: 'Pornchai',
    lastname: 'Jaidee',
    studentId: 651000103,
    address: { province: 'Bangkok', country: 'Thailand' },
    getFullname: function () {
        return `${this.firstname} ${this.lastname}`
    }
  }
  //get property 1) objectname.propertykey 2) objectname["propertykey"]
  console.log(st4.firstname)
  console.log(st4['lastname']) //dynamic key
  //dynamic property: add a new one, update or delete existing property
  st4.email = 'pornchai.jai@kmutt.ac.th' //add a new property
  st4.firstname = 'Pornsak' //edit property value
  delete st4.email //delete a property
  st4.getAddress = function () {
    //add a new property that stores function
    return this.address
  }
  console.log(st4)
  console.log(Object.prototype.isPrototypeOf(st4))
  console.log(Date.prototype.isPrototypeOf(st4))
  console.log(st4.getFullname()) //Pornchai Jaidee
  //property value can store function
  const st5 = {
    firstname: 'Porntip',
    lastname: 'Dee',
    studentId: 651000105,
    getFullname: function () {
      return `${this.firstname} ${this.lastname}`
    }
  }
  console.log(st5.getFullname()) //Porntip Dee


// -------------------------------------
//constructor function
function Person(id, fn, ln) {
    this.id = id
    this.firstname = fn
    this.lastname = ln
}

console.log('2.--------------------------------')
//2. create object by using constructor function
const p1 = new Person(1001, 'Adam', 'Jo')
const p2 = new Person(1002, 'Henry', 'Moore')
const p3 = new Person(1003, 'Mia', 'Anderson')
console.log(p1)
console.log(p2)
console.log(p3)
p1.email = 'adam@gmail.com'
//Object prototype<-Person prototype<-p1
console.log(p1)
console.log(Object.prototype.isPrototypeOf(p1))
console.log(Person.prototype.isPrototypeOf(p1))


console.log('3.--------------------------------')
// -------------------------------------
//3. create object by using Class
//javascript is a prototype based, not class based
//syntactic sugar
class Circle {
    constructor(r) {
        this.radius = r
    }
    //shared method among circle objects
    area() {
        return Math.PI * Math.pow(this.radius, 2)
    }
    getRadius() {
        return this.radius
    }
}
const c1 = new Circle(2)
const c2 = new Circle(3)
const c3 = new Circle(4)
console.log(c1.area())
console.log(c2.area())
console.log(c3.area())
console.log(c1.getRadius())
console.log(c2.getRadius())
console.log(c3.getRadius())
// Object prototype <- Circle prototype <- c1
console.log(Object.prototype.isPrototypeOf(c1))
console.log(Circle.prototype.isPrototypeOf(c1))


console.log('4.--------------------------------')
// -------------------------------------
//4. create object with Object.create() function
//const p1 = new Person(1001, 'Adam', 'Jo')
const pp1 = Object.create(p1)
console.log(pp1)
console.log(pp1.id)
console.log(pp1.firstname)
console.log(pp1.lastname)
console.log(Object.prototype.isPrototypeOf(pp1)) //true
console.log(Person.prototype.isPrototypeOf(pp1)) //true
pp1.hobbies = ['reading', 'shopping']
console.log(Object.keys(pp1))
console.log(Object.values(pp1))
console.log(Object.entries(pp1))