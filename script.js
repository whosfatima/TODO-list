let input= document.querySelector('input')
let button= document.querySelector('button')
let ul= document.querySelector('ul')

let addTask= (text) => {
    let li= document.createElement('li')
    li.textContent= text
    return li
}
// button.onclick= () => {
//     let inputVal= input.value
//     let realInput= addTask(inputVal)
//     ul.appendChild(realInput)
//     input.value ='';
// }
button.addEventListener('click', () => {
    let inputVal= input.value
    let realInput= addTask(inputVal)
    ul.appendChild(realInput)
    input.value ='';
})