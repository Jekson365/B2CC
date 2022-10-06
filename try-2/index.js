var toggler = document.querySelector(".nav-toggle")
var navigation = document.querySelector(".navigation")
var closeNav = document.getElementById("close-btn")

toggler.addEventListener("click",()=> {
    navigation.classList.add("show-navbar")
    navigation.classList.remove("hide-navbar")
})
closeNav.addEventListener("click",()=> {
    navigation.classList.add("hide-navbar")
    navigation.classList.remove("show-navbar")
})

