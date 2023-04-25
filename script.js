const password = document.querySelector("#password")
const passwordConfirm=document.querySelector("#passwordconfirm")
const passwordMessage=document.querySelector(".onErrorMessage")

const button = document.querySelector("#button");
button.addEventListener("click",()=>{
    //compare passwords input
    nonMatchingPasswords=true

    if(nonMatchingPasswords){
        password.classList.toggle("active")
        passwordConfirm.classList.toggle("active")
        passwordMessage.classList.toggle("activeMsg")
        passwordMessage.classList.toggle("inActiveMsg")
    }
})