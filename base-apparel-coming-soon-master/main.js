let inputEmail = document.getElementById('form_container_email_input');
let button = document.getElementById('form_container_email_button')
let error = document.getElementById("form_container_email--error")

button.addEventListener('click', (e) => {
 e.preventDefault()
 validateEmail(inputEmail.value)
})

function validateEmail(email) {
 let expRegular = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

 let test = expRegular.test(email)



 if (test == true) {

  error.style.visibility = 'hidden'
  inputEmail.style.border = '1px solid var(--Desaturated-Red)'
  inputEmail.style.backgroundImage = 'url()'

 } else {
  error.style.visibility = 'visible'
  inputEmail.style.backgroundImage = 'url(./images/icon-error.svg)'
  inputEmail.style.border = '1px solid red'
 }
}