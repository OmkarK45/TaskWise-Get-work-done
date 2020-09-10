var nav = document.getElementById("site-menu");
var header = document.getElementById("top");
function navToggle() {
  var btn = document.getElementById("menuBtn");
  var nav = document.getElementById("menu");
  var menuIcon = document.getElementById("menuIcon");
  if (menuIcon.classList.contains("fa-bars")) {
    console.log("Yes Bars");
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
  } else {
    menuIcon.classList.add("fa-bars");
    menuIcon.classList.remove("fa-times");
  }
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("items-center");
  nav.classList.toggle("hidden");
}