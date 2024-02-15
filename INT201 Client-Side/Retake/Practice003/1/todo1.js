//input.addEventListener('keyup', (e) => {
//    console.log(e.key);
//})

function init() {
  const addBtn = document.getElementById('addButton')
  addBtn.addEventListener('click', addTask)
}
function addTask() {
  const input = document.getElementById('todoInput')
  const ul = document.getElementById('todoList')
  const li = document.createElement('li')

  li.textContent = input.value
  ul.appendChild(li)
  input.value = ''
}

init()