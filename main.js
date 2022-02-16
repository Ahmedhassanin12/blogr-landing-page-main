let myBtn = document.querySelector(".btn-mobile-nav .icon");
let mobNav = document.querySelector(".displaying");
// open mobile nav
myBtn.addEventListener("click", function () {
    mobNav.classList.toggle("most");
    
})
// change the icon
myBtn.addEventListener("click", function () {
    document.querySelector(".icon-x").style.display = "block"
    myBtn.style.display = "none"
});
// reset what we do at click on icon x
document.querySelector(".icon-x").addEventListener("click", function () {
    document.querySelector(".icon-x").style.display = "none";
    myBtn.style.display = "block";
    mobNav.classList.toggle("most");
})
// show the dro
let ar = document.querySelector(".first");
ar.addEventListener("click", function () {
    document.querySelector(".first ul").classList.toggle("mo-1")
})

let ar2 = document.querySelector(".second");
ar2.addEventListener("click", function () {
  document.querySelector(".second ul").classList.toggle("mo-1");
});


let ar3 = document.querySelector(".third");
ar3.addEventListener("click", function () {
  document.querySelector(".third ul").classList.toggle("mo-1");
});
