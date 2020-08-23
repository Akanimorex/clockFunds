// (() =>{
//     console.log("anonymous")
//    let password = document.getElementById("password");
//    let confirmPassword = document.getElementById("confirm-pass");

//    confirmPassword.addEventListener("change",()=>{
//        console.log("change")
//     if(password.value === confirmPassword.value ) {
//         document.getElementById("password-msg").textContent="Password Matched!";
//     } 
//    })
   
// }

// )()


const run =()=>{
    console.log("run")
}

let password = document.getElementById("password");
let confirmPassword = document.querySelector("#confirm-pass");

confirmPassword.addEventListener("change",()=>{
    console.log("peace")
})