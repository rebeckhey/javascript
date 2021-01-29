let users = [
    {
        id: '1',
        förNamn: 'Förnamn',
        efterNamn: 'Efternamn',
        epost: 'email@example.com',
        completed: false
    }
]
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

button.addEventListener('click', (event) => {
    event.preventDefault()
    if (inputFirstname.value !== '' && inputLastname.value !== '' && email.value !== '' && validEmail(email.value)) {
        errorFirstname.style.visibility = 'hidden'
        errorLastname.style.visibility = 'hidden'
        errorEmail.style.visibility = 'hidden'
        let user = {
            id: Date.now().toString(),
            förNamn: inputFirstname.value,
            efterNamn: inputLastname.value,
            epost: email.value,
        }
        users.push(user)
        lista()

    } if (inputFirstname.value.length < 2) {
        errorFirstname.style.visibility = 'visible'
        document.getElementById('errorFirstname').innerHTML = ('För kort namn. Minst 2 bokstäver!')
    }
    if (inputLastname.value.length < 2) {
        errorLastname.style.visibility = 'visible'
        document.getElementById('errorLastname').innerHTML = ('För kort namn. Minst 2 bokstäver!')
    }
    if (inputFirstname.value == '') {
        errorFirstname.style.visibility = 'visible'
        document.getElementById('errorFirstname').innerHTML = ('Alla fält måste vara ifyllda!')
    }
    if (inputLastname.value == '') {
        errorLastname.style.visibility = 'visible'
        document.getElementById('errorLastname').innerHTML = ('Alla fält måste vara ifyllda!')

    }
    if (!validEmail(email.value)) {
        errorEmail.style.visibility = 'visible'
        document.getElementById('errorEmail').innerHTML = ('Tänk på att din email måste innehålla @ och får inte innehålla åäö!')
    }
    if (email.value == '') {
        errorEmail.style.visibility = 'visible'
        document.getElementById('errorEmail').innerHTML = ('Alla fält måste vara ifyllda!')
    }

    function validEmail(email) {
        return /^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i.test(email)
    }
})
trash.addEventListener('click', (e) => {
    e.preventDefault()
    lista()
})
output.addEventListener ('click', (e) => {
    e.preventDefault()
    users = users.filter(user => user.id !== e.target.parentNode.id)
    lista();
    console.log('')
  })
