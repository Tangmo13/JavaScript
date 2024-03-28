function init() {
  const addButton = document.getElementById('addButton')
  addButton.addEventListener('click', showName)
}

function showName() {
  const inputName = document.getElementById('yourName')
  //   console.log(inputName.value)
  const divShowName = document.getElementById('showName')
  
  //    <div></div>
  const divElement = document.createElement('div')
  // <p>Your input name<p>
  const pElement = document.createElement('p')
  pElement.textContent = inputName.value
  
  //<div> <p>Your input name<p></div>
  divElement.appendChild(pElement)
  
  // <div id="showName">
  //    <div><p>Your input name<p></div>
  divShowName.textContent = ""
  // </div>
  divShowName.appendChild(divElement)
}
init()