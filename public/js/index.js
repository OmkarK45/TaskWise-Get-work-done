// document.addEventListener('DOMContentLoaded', function () {
// const form = document.getElementById("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const name = form["name"].value;
//   const email = form["email"].value;
//   const password = form['password'].value;

//   if (name === "") {
//     addErrorTo('name', 'First Name is required'); 
//   }else{
//     removeErrorFrom('name');
//   }

//   if (email === '') {
//     addErrorTo('email', 'Email is required'); 
//   }else if(!isValid(email)){
//     addErrorTo('email', 'Email is not valid'); 
//   }
//   else{
//     removeErrorFrom('email');
//   }

//   if (password === "") {
//     addErrorTo('password', 'Password is required'); 
//   }else if(password.length<6){
//       addErrorTo('password','Password length must be more that 6')
//   }
//   else{
//     removeErrorFrom('password');
//   }
// });

// function addErrorTo(field, message){
//   const small = form[field].parentNode.querySelector("small");
//   small.textContent = message;
//   small.style.opacity = 1;
// }


// function isValid(email) {
//   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// }
// function removeErrorFrom(field){
//   const small = form[field].parentNode.querySelector("small");
//   small.style.opacity = 0;
// }
// })
var mini = true;

function toggleSidebar() {
  if (mini) {
    console.log("opening sidebar");
    document.getElementById("mySidebar").style.width = "250px";
    document.querySelector(".main-section").style.marginLeft = "250px";
    this.mini = false;
  } else {
    console.log("closing sidebar");
    document.getElementById("mySidebar").style.width = "85px";
    document.querySelector(".main-section").style.marginLeft = "85px";
    this.mini = true;
  }
}
