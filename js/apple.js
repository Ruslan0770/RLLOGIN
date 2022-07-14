let login=document.getElementById("loginclick")
let validate=document.getElementById("validate")
login.addEventListener("click",(e)=> {
    e.preventDefault();
    let name1 =document.querySelector(".name1").value
    let email =document.querySelector(".email").value
    let password =document.querySelector(".password").value
    const userDetail=JSON.parse(localStorage.getItem("User"))
   
    if(userDetail.length==0)
    validate.innerHTML="User not found"

       userDetail.forEach(user => {
        if (user.name===name1&&user.email===email&&user.password===password) {
           location.replace("http://127.0.0.1:5501/html/user.html")
        }else{
            validate.classList.remove('d-none');
            validate.innerHTML="User not found"
        }
       });
      
})



    