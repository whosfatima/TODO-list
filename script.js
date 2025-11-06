let input = document.querySelector('input')
let button = document.querySelector('button')
let ul = document.querySelector('ul')

let createTask = (text) => {
    let li = document.createElement('li')
    li.textContent = text
    return li
}
// button.onclick= () => {
//     let inputVal= input.value
//     let realInput= createTask(inputVal)
//     ul.appendChild(realInput)
//     input.value ='';
// }
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask()
    })

let addTask= () => {
    let inputVal = input.value.trim()
    let realInput = createTask(inputVal)
    ul.appendChild(realInput)
    input.value = '';
}
button.addEventListener('click', addTask)