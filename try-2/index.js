var toggler = document.querySelector(".nav-toggle")
var navigation = document.querySelector(".navigation")
var closeNav = document.getElementById("close-btn")

toggler.addEventListener("click",()=> {
    navigation.classList.remove("show-navbar")
})
closeNav.addEventListener("click",()=> {
    navigation.classList.add("show-navbar")
})
