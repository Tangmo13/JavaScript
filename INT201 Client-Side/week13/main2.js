const submitButton = document.querySelector('button')
//console.log(submitButton)

submitButton.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('cancle aubmit to server')
})

const username = document.getElementById('input-user')
