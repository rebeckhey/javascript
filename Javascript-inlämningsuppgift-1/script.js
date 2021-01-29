let users = []

let form = document.querySelector('#formGroup');
let inputFirstname = document.querySelector('#inputförnamn');
let inputLastname = document.querySelector('#inputefternamn');
let email = document.querySelector('#inputEmail4');
let button = document.querySelector('#showList');
let output = document.querySelector('#outputList');
let edit = document.querySelector('#editbtn');
let trash = document.querySelector('#trashbtn');



let lista = () => {
    output.innerHTML = ''
    users.forEach(user => {
        output.innerHTML += `<div id="${user.id}"class="bg-white border rounded p-2 d-flex justify-content-between align-items-center mt-2"><p class="para mb-0" >${user.förNamn} ${user.efterNamn}<br><span>${user.epost}</span></p> 
        <div class="ml-5">
        <button id="editbtn" class="btn btn-dark"><i class="fas fa-edit"></i></button>
        <button id="trashbtn" class="btn btn-dark"><i class="fas fa-trash-alt"></i></button>
      </div>
      </div>`
    })
}
users.shift(lista);

function validateFirstname () {
    if (inputFirstname.value === '') {
        errorFirstname.style.visibility = 'visible'
        document.getElementById('errorFirstname').innerHTML = ('Alla fält måste vara ifyllda!')
        return false
    }
    if (inputFirstname.value.length < 2) {
        errorFirstname.style.visibility = 'visible'
        document.getElementById('errorFirstname').innerHTML = ('För kort namn. Minst 2 bokstäver!') 
        return false

    }
    else{
        errorFirstname.style.visibility = 'hidden'
        return true
   
        
    }
}

function validateLastname (){
    if (inputLastname.value === '') {
        errorLastname.style.visibility = 'visible'
        document.getElementById('errorLastname').innerHTML = ('Alla fält måste vara ifyllda!')
        return false
    }
    if (inputLastname.value.length < 2) {
        errorLastname.style.visibility = 'visible'
        document.getElementById('errorLastname').innerHTML = ('För kort namn. Minst 2 bokstäver!')
        return false
    }
    else {
        errorLastname.style.visibility = 'hidden'
        return true
    }
    
    
}
function validateEmail ()   {

    if (email.value === '') {
        errorEmail.style.visibility = 'visible'
        document.getElementById('errorEmail').innerHTML = ('Alla fält måste vara ifyllda!')
        return false
    }
    if (!validEmail(email.value)) {
        errorEmail.style.visibility = 'visible'
        document.getElementById('errorEmail').innerHTML = ('Tänk på att din email måste innehålla @ och får inte innehålla åäö!')
        return false
    }
    else{
        errorEmail.style.visibility = 'hidden'
        return true
    }
    function validEmail(email) {
        return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)
    }
}
button.addEventListener('click', (event) => {
    event.preventDefault()
   if (validateFirstname() & validateLastname() & validateEmail())
   {
    let user = {
        id: Date.now().toString(),
        förNamn: inputFirstname.value,
        efterNamn: inputLastname.value,
        epost: email.value
    }
    users.push(user)
    lista() 
   }
   }
)
 trash.addEventListener('click', (e) => {
    e.preventDefault()
    lista() 
 })
 
