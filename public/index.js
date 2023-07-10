const input = document.querySelector('#input')
const container = document.querySelector('.container')
const listItems = document.querySelectorAll('.list-item')

function addToDo() {
    if(input.value != ''){
        const item = document.createElement('div')
        item.innerHTML = input.value
        item.classList.add("list-item")
        container.appendChild(item)
        input.value = ''
    }
    
}



container.addEventListener('click', (event) => {
    event.target.remove()
})




