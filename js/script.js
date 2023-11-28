const menu = document.querySelector("header .menu-icon");
const navMenu = document.querySelector("header nav");


menu.addEventListener("click", function(){
    navMenu.classList.toggle("active");
})

document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove("active");
    }
  });