import { calculateBtnHandler } from "./eventHandler/eventController.js"
import { ageCalculate } from "./util/utility.js"

const body = document.body
const calculateBtn = document.querySelector('#dob+button')

body.style.backgroundColor = '#f4d0da'
calculateBtn.addEventListener('click', calculateBtnHandler)

ageCalculate(1)