//? Closures Function

function say() {
  let msg = 'Hello World'

  function shout() {
    return msg + '!!!'
  }

  function setMessage(newMsg) {
    msg = newMsg
  }

  return {shout, setMessage}
}

const {shout, setMessage} = say()

setMessage('Meow')
console.log(shout())
