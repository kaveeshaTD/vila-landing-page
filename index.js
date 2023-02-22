document.getElementById("exp").onclick=function(){
 window.alert("pleas login before Explore..!");
}

document.getElementById("exp2").onclick=function(){
  window.alert("pleas login before Follow..!");
 }

//  let popup = document.getElementById("popdiv");

// function openpop(){
//   popup.classList.add("popup-cls");
// }

// function closepop(){
//   popup.classList.remove("popup-cls");
// }

const signupbtnlink = document.querySelector(".signupbtn-link");
const signinbtnlink = document.querySelector(".signinbtn-link");
const wrapper = document.querySelector(".wrapper");



signupbtnlink.addEventListener('click', () => {
  wrapper.classList.toggle('active');
 });
 
 signinbtnlink.addEventListener('click', () => {
   wrapper.classList.toggle('active');
   });


   //for login button open and close
    function myfunction(){
     wrapper.classList.toggle("reset-pop");
    }

//  function open(){
//   wrapper.classList.add("reset-pop")
//  }

//  function remove(){
//   wrapper.classList.remove("reset-pop")
//  }
