let inputEmail= document.getElementById('email');
let button=document.getElementById('button')

button.addEventListener('click',(e)=>{
    e.preventDefault()
    validateEmail(inputEmail.value)
})

function validateEmail(email){
    let expRegular= /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

    let test=expRegular.test(email)
    let parraghaph= document.getElementById('error')


    if(test ==false){
        parraghaph.innerHTML = `<p class='error-msg'>Please provide a valid email adress</p>`
        document.getElementById("email").style.border='1px solid red'

    }else{
        console.log(test)
        parraghaph.innerHTML = `<p class='succes-msg'>Subscrbibed</p>`
        document.getElementById("email").style.border='1px solid green'
    }
}