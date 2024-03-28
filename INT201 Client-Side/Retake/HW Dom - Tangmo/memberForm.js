import { memberManagement } from './data/members.js'
const { getMembers, findMember } = memberManagement()

// your student id, firstname, and lastname here
// 65130500068 Ratikorn Damgurnglubpanavanit
function memberForm() {
  const addEventHandler = () => {
    const memberBtn = document.getElementById('member')
    memberBtn.addEventListener('click', memberHandler)
  }
  
  const memberHandler = () => {
    const divSearchMember = document.getElementById('searchMember')
    divSearchMember.textContent = ''
    const pEle = document.createElement('p')
    const inputEle = document.createElement('input')
    const SearchBtn = document.createElement('button')
    SearchBtn.addEventListener('click', searchHandler)
    
    pEle.textContent = 'Your Member Id:'
    inputEle.setAttribute('id', 'memberId')
    SearchBtn.textContent = 'search'
    
    divSearchMember.appendChild(pEle)
    divSearchMember.appendChild(inputEle)
    divSearchMember.appendChild(SearchBtn)
  }
  
  const searchHandler = () => {
    const inputBox = document.getElementById('memberId')
    const inputValue = parseInt(inputBox.value)
    const foundMember = findMember(inputValue)
    inputBox.value = ''
    
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')
    const p4 = document.createElement('p')
    const p5 = document.createElement('p')
    
    p1.textContent = 'id: ' + foundMember.id
    p2.textContent = 'firstname: ' + foundMember.firstname
    p3.textContent = 'lastname: ' + foundMember.lastname
    p4.textContent = 'email: ' + foundMember.email
    p5.textContent = 'address: ' + foundMember.address
    
    const divFoundMember = document.getElementById('foundMember')
    divFoundMember.textContent = ''
    divFoundMember.appendChild(p1)
    divFoundMember.appendChild(p2)
    divFoundMember.appendChild(p3)
    divFoundMember.appendChild(p4)
    divFoundMember.appendChild(p5)
  }

  return {
    addEventHandler
  }
}

const { addEventHandler } = memberForm()
addEventHandler()