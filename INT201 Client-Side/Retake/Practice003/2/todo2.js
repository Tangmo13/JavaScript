//* 2.

const input = document.querySelector('.todoInput')
input.addEventListener('keyup', (e) => {
    console.log(e.key);
})

function init() {
    const btn = document.querySelector('.addButton')
    btn.addEventListener('click', addTask)
}

function addTask() {
    const ul = document.getElementById('todoList')
    const li = document.createElement('li')
    li.textContent = input.value
    ul.appendChild(li)
    input.value = ''
}
init()

// const list = document.getElementsByTagName("ul")[0]