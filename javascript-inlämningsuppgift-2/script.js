let todoObjects = []
let input = document.querySelector('#input')
let inputBtn = document.querySelector('#addBtn')
let errorMessage = document.querySelector('#small')
let outputDiv = document.querySelector('#output')

let lista = () => {
outputDiv.innerHTML=''
todoObjects.forEach(todoObject => {
    outputDiv.innerHTML += 
    `<div class="addedTodo d-flex flex-column  align-items-center  justify-content-center mt-5" id="output">
    <div class="savedTodo d-flex rounded justify-content-between align-items-center" id="todoText">
        <button id="completeButton"><i class="circle completedCircle pr-3 check fas fa-check-circle"></i></button>
         <p class="textP align-middle mb-0">${todoObject.title}</p>
            <button id="trashBtn"class="align-items-center d-flex pl-3"><i class="fas fa-trash"></i></button>
        </div>
        </div>`
})
}
let useFetch = () => {
fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10')
.then(response => response.json())
.then(data => {
 todoObjects=data;   
 console.log(data)
 lista()
 })
} 
useFetch()

let postTodo = (title) => {
    fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        body: JSON.stringify ({
            title
        })
})
.then(response => response.json())
.then(data => {
    todoObjects.unshift(data)
    lista()
}
)}
function validate (){
    if (input.value ===''){
        errorMessage.style.display = 'block'
        errorMessage.innerText = `Please enter a todo!`
        return false
    }
    else{
        errorMessage.style.display = 'none'
        return true
    }
    }
inputBtn.addEventListener ('click', e =>{
    e.preventDefault()
    if (validate()){
    postTodo(input.value)
    input.value=''}
})
outputDiv.addEventListener('click', e =>{
    e.preventDefault()
    if(e.target.classList.contains('textP')){
        e.target.classList.add('lined')
        e.target.style.textDecoration = 'line-through' 
        }
        
})
