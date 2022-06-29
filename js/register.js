


if(localStorage.getItem('User') === null){ 
    localStorage.setItem('User',JSON.stringify([]));
}
    
function register(){
    let namee=document.getElementById('name1').value
    let email=document.getElementById('email').value
    let password=document.getElementById('password').value

    if(namee==='' ||email===''||password===''){
        alert('Fill in the blanks');
    }
    else{
        let keep=JSON.parse(localStorage.getItem('User'));
        keep.push({
            name:namee,
            email:email,
            password:password
        })
        localStorage.setItem('User',JSON.stringify(keep));
        
        alert("${namee} adli istifadeci elave olundu");
        
    }
}


// function infusers(){
//     let keep =JSON.parse(localStorage.getItem('User'));

//     let user ="";
//     keep.forEach(x => {
            
//         user +=
//                       <ul>
//                          <li>USERNAME: ${namee}</li>
//                          <li>Email: ${email}</li>
//                          <li>PASSWORD: ${password}</li>
//                       </ul>
//     });
//     document.getElementById('list').innerHTML=user;
// }
        
        
           
        

    