let main=document.querySelector(".main");
let password=document.querySelectorAll(".password");
let username=document.querySelectorAll(".name1");
let email=document.querySelectorAll(".email");
let eyes=document.querySelectorAll('.eye');
eyes.forEach(eyeIcon => {
    eyeIcon.addEventListener("click",()=>{
        password.forEach(password1 => {
            if(password1.type==="password"){
                password1.type="text";
            }
            else{
                password1.type="password";
            }
        });
    })
});

    