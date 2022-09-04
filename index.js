var globe = document.querySelector(".globe")
var langs = document.querySelector(".langs")
globe.addEventListener("click",()=> {
    langs.classList.toggle("show-langs")
})

// responsive navbar
const navBar = document.querySelector(".navigation")
const showNav = document.getElementById("toggle-nav")
const closeNav = document.getElementById("close-btn")
showNav.addEventListener("click",()=> {
    navBar.classList.add("show-navbar")
})
closeNav.addEventListener("click",()=> {
    navBar.classList.remove("show-navbar")
})

// show langs 
const globeIcon = document.querySelector(".resp-globe")
globeIcon.addEventListener("click",()=> {
    document.querySelector(".langs").classList.toggle("show-langs")
})