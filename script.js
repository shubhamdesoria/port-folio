// const nav = document.querySelector('#nav');
// window.addEventListener('scroll', ()=> {

//      console.log(window.pageYOffset , nav.pageYOffset);
//     if(window.pageYOffset > nav.pageYOffset){
//         nav.classList.add("sticky");
//     }   
//     else{
//         nav.classList.remove("sticky")
// }
//     });
window.onscroll = function() {myFunction();};

var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navbar.style.opacity = 0.6;
  } else {
    navbar.classList.remove("sticky");
    navbar.style.opacity = 1;
  }
}
