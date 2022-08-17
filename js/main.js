const searchBtn = document.querySelector("#search-icon")
const serachEl = document.querySelector(".search")
const menuBtn = document.querySelector(".menu")
const nav = document.querySelector("nav")
const home = document.getElementById("home")
home.addEventListener("click", () => {
    window.location.reload()
})

searchBtn.addEventListener("click", () => {
    serachEl.classList.toggle("active")
})
menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active")
})