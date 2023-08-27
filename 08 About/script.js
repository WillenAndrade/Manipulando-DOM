const nickName = document.querySelector("#nickname")
const favorites = document.querySelector("#favorites")
const homeTown = document.querySelector("#hometown")
const btnInfo = document.querySelector(".btnInfo")
const btnAbout = document.querySelector(".btnAbout")
const info = document.querySelector(".info")
const general = document.body

general.style.fontFamily = "Arial, sans-serif"

btnInfo.addEventListener("click", () => {
    info.classList.toggle("active")
})

btnAbout.addEventListener("click", () => {
   nickName.textContent = " Willen"
   favorites.textContent = " I'dont know"
   homeTown.textContent = " Palmital"
})
    
