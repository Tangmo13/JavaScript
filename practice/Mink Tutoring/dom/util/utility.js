export function ageCalculate(dob) {
  const currentYear = new Date().getFullYear()
  //* "yyyy-mm-dd" --> ["yyyy", "mm", "dd"]
  const yearOfBirth = dob.split('-')[0]

  return parseInt(currentYear) - parseInt(yearOfBirth)
}