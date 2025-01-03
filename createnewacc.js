document.addEventListener("DOMContentLoaded",()=>{

let username=document.querySelector('#us')
let email=document.querySelector('#email')
let city=document.querySelector('#city')
let mobileno=document.querySelector('#Mobile Number')
let pass=document.querySelector('#pass')
let cpass=document.querySelector('#cpass')


let errormsg=document.querySelector('#errormsg')
let submit=document.querySelector('#submit')
submit.addEventListener("click",()=>{


    if(username.value.trim() === "" || email.value.trim() === "" || city.value.trim() == "" || mobileno.value.trim() === "" || pass.value.trim() === "" || cpass.value.trim() === ""){
        errormsg.classList.toggle('hide')
    }


})








})


