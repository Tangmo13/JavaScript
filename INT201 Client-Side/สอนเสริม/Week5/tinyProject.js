const accounts = [
  // {id: 1, name: "User", balance: 10000, bankName: "SCB"},
  // {id: 2, name: "Admin", balance: 10000, bankName: "TMB"},
  // {id: 3, name: "Jim", balance: 10000, bankName: "SCB"},
]

const interest = 15

// {
//   id: 1,
//   name: "User",
//   balance: 10000,
//   bankName: "abc",
// }

function addAccount(id, name, balance, bankName) {
  const isUnique = !accounts.some(
    (user) => {
      return user.id === id // ถ้า return ออกมาเป็น false จะเท่ากับค่า Unique
    }
  )
  if (isUnique) {
    accounts.push({id, name, balance, bankName})
  } else {
    consoleIt("This ID is already existed!")
  }

}

function deposit(id, amount) {
  let selectedIndex = accounts.findIndex(
    (user) => {
      return user.id === id // จะ return ออกมาเป็น Boolean
    }
  )
  accounts[selectedIndex].balance += amount
}

function withdraw(id, amount) {
  let selectedIndex = accounts.findIndex(
    (user) => {
      return user.id === id
    }
  )
  let user = accounts[selectedIndex]
  if (user.balance >= amount) {
      user.balance -= amount
  }
  // accounts[selectedIndex].balance -= amount
}

function totalBalance() {
  let sum = accounts.reduce(
    (a, b) => {
      return a + b.balance
    }, 0
  )
  return sum
}

function transfer(srcId, desId, amount) { // srcId = sourceId, desId = destinationId
  const srcUser = getUser(srcId)
  const desUser = getUser(desId)
  if (srcUser.balance >= amount + interest) {
      srcUser.balance -= amount
      srcUser.balance += amount
  }
  if (srcUser.bankName !== desUser.bankName) {

  }
}

function isSameBank(srcUser, desUser) {

}



function getUser(id) {
  let selectedIndex = accounts.findIndex(
    (user) => {
      return user.id === id
    }
  )
  return accounts[selectedIndex] // return มาจะได้ object ของ user ไปเลย
}


console.log("total balance: " + totalBalance())
console.log(accounts)

// ---------------------------------------------------------------
addAccount(68, "Ratikorn", 500, "SCB")
addAccount(123, "Bambie", 40, "BBL")
addAccount(246, "Yuzu", 20, "BBL")

console.log(accounts)
console.log(totalBalance())

deposit(68, 300)
withdraw(123, 20)
transfer(68, 123, 60)

console.log(totalBalance())