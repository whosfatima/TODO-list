let input = document.querySelector('input')
let button = document.querySelector('button')
let ul = document.querySelector('ul')

let createTask = (text) => {
    let li = document.createElement('li')
    let span = document.createElement('span')
    span.textContent = text
    li.appendChild(span)
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

let addTask = () => {
    if (input.value === '') {
        alert('nope')
    } else {
        let inputVal = input.value.trim()
        let realInput = createTask(inputVal)
        realInput.innerHTML += ` <span class='closedBtn'>   <i class="fa-solid fa-trash-can"></i>
        </span>`
        ul.appendChild(realInput)
        input.value = '';

    }

}
button.addEventListener('click', addTask)

input.addEventListener('click', () => {

})