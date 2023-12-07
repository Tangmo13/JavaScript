/* //select a collection of specified condition

const programmingLect = document.getElementsByClassName('programming')
//? return HTMLCollection data type - array-like (can use index or length, cannot use array function (forEach, filter, map,...))
console.log(programmingLect)
console.log(programmingLect.length)

const ulTagname = document.getElementsByTagName('ul')
console.log(ulTagname)
console.log(ulTagname.length)
// ?return HTMLCollection

const coursesEle = document.querySelectorAll('.courses')
console.log(coursesEle)
//? NodeList data type - array-like (can use index, length) but NodeList implements only forEach but can not use other array functions)

const divEle = document.getElementById('bscit-courses')
const courseUnderDiv = divEle.querySelectorAll('.courses')
console.log(courseUnderDiv)

const courseUnderDoc = document.querySelectorAll('.courses')
console.log(courseUnderDoc)
*/


//! attributes
/* 
const programmingLect = document.querySelectorAll('.programming')
//? NodeList, implement only forEach, not all array function implemented
console.log(programmingLect)
programmingLect.forEach((pl) => {
  console.log(pl)
  console.log(pl.nodeName)
  console.log(pl.nodeType)
  console.log(pl.nodeValue)
  console.log(pl.attributes) // get all attributes of element // NameNodeMap does not implement forEach
  Array.from(pl.attributes).forEach((attr) => console.log(attr))
})

const pEle = document.getElementById('p-01')
const pEleAttributes = pEle.attributes
console.log(pEleAttributes)
console.log(pEleAttributes.length)
Array.from(pEleAttributes).forEach((attr) => {
  console.log(attr.name)
  console.log(attr.value)
})
console.log(pEle.getAttribute('id'))

const ulEle = document.getElementsByTagName('ul')
//? return HTMLCollection -array-like, not implement forEach

const ulEleArray = Array.from(ulEle)
ulEleArray.from(ulEle).forEach((ul) => console.log(ul))
*/


// const divEle = document


//! CRUD on any element node
/* 
//*1. create element, <li></li>
const newLiEle = document.createElement('li')

//*2. create attribute <li class="devops" name="devopsLect"></li>
newLiEle.setAttribute('class', 'devops')
newLiEle.setAttribute('name', 'devopsLect')

//*3. add text value to element,
//? <li class="devops" name="devopsLect">Siam Yamsangsung</li>
newLiEle.innerHTML = '<span style="color:red">Siam Yamsangsung</span>'

//*4. add new li element to a parent node
const divParent = document.querySelector('div.lecturers>ul')
console.log(divParent)
//? divParent.appendChild(newLiEle)

const liEle = document.querySelectorAll('div.lecturers>ul>li')
console.log(liEle)
const refNode = liEle[1]
console.log(refNode)

//? divParent.insertBefore(newLiEle, refNode)
//? divParent.replaceChild(newLiEle, refNode)

divParent.removeChild(refNode)
*/


//! windowDiaglog
//* window.alert, window.prompt, window.confirm
window.alert('Do you want to exit?')
const userName = window.prompt('Please enter your name', 'ex., Somchai Jaidee')
console.log(userName) //return user input, ok=user input, cancel=null
const isExit = window.confirm(`Goodbye, ${userName}`)
console.log(isExit) //return boolean, ok=true, cancel=false