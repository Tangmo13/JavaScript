//* 3
const ul = document.createElement('ul')
ul.setAttribute('id', 'todoList')

const input = document.createElement('input')
input.setAttribute('type', 'text')
input.setAttribute('placeholder', 'Enter a new task')
input.addEventListener('keyup', ((e) => {
    console.log(e.key);
}))


function init() {
    const fDiv = document.querySelector('div')

    const btn = document.createElement('button')
    btn.textContent = 'Add'
    btn.addEventListener('click', addTask)

    fDiv.appendChild(input)
    fDiv.appendChild(btn)

    const sDiv = document.querySelector('div+div')
    sDiv.appendChild(ul)
}
function addTask() {
    const li = document.createElement('li')
    li.textContent = input.value
    ul.appendChild(li)
		input.value = ''
}
init()