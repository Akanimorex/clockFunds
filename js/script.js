(() =>{
   let password = document.querySelector("#password");
   let confirmPassword = document.querySelector("#conPassword");
   let passwordMsg = document.querySelector("#password-msg");
  
    confirmPassword.addEventListener('input',()=>{
        if(password.value === confirmPassword.value){
            passwordMsg.textContent="Correct Match!"
            passwordMsg.style.color="green"
        }
        else{
            passwordMsg.textContent="Not Matching!";
            passwordMsg.style.color="red"
        }
    })
   })()
   


