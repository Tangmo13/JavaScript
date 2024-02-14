import { ageCalculate } from "../util/utility.js"

export function calculateBtnHandler(event) {
  event.preventDefault()

  const dobInput = document.getElementById('dob')
  const ageDisplay = document.getElementById('age')
  if (dobInput.value === '') {
    ageDisplay.textContent = '?'
    return
  }

  // alert(ageCalculate(dobInput.value))
  ageDisplay.textContent = ageCalculate(dobInput.value)
}