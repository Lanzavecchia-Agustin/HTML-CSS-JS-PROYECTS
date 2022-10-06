let inputEmail= document.getElementById('email');
let inputFirstName= document.getElementById('firstName');
let inputLastName= document.getElementById('lastName');
let inputPassword= document.getElementById('passwordInput');


let button=document.getElementById('button')

button.addEventListener('click',(e)=>{
    e.preventDefault()
    validateEmpty(inputFirstName.value,inputLastName.value,inputPassword.value)
    validateEmail(inputEmail.value)
})

function validateEmail(email){
    let expRegular= /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

    let test=expRegular.test(email)

    if(test ==false){
        document.getElementById("email-error").style.visibility='visible'
        document.getElementById("email").style.border='1px solid red'
    }else{
        document.getElementById("email-error").style.visibility='hidden'
        document.getElementById("email").style.border='1px solid hsl(246, 25%, 77%)   '
    }
}

function validateEmpty(firstName,lastName,password){
        if(firstName.length==0){
            document.getElementById("firstName-error").style.visibility='visible'
            document.getElementById("firstName").style.border='1px solid red'     
        }else{
            document.getElementById("firstName-error").style.visibility='hidden'
            document.getElementById("firstName").style.border='1px solid hsl(246, 25%, 77%)   '

        }

        if(lastName==0){
            document.getElementById("lastName-error").style.visibility='visible'
            document.getElementById("lastName").style.border='1px solid red'  
        }else{
            document.getElementById("lastName-error").style.visibility='hidden'
            document.getElementById("lastName").style.border='1px solid hsl(246, 25%, 77%)'
         }
        if(password==0){
            document.getElementById("password-error").style.visibility='visible'
            document.getElementById("passwordInput").style.border='1px solid red' 
            
        }else{
            document.getElementById("password-error").style.visibility='hidden'
            document.getElementById("passwordInput").style.border='1px solid hsl(246, 25%, 77%)'  
        }
 }