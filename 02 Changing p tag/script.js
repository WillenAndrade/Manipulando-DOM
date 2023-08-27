textP = document.querySelector("#text")
button = document.querySelector("#jsstyle")
let textPColor = ""

button.addEventListener("click", () => {
    if( textPColor == "") {
        textP.style.color = "purple"
        textP.style.fontSize = "26px"
        textPColor = "purple"    
    } else {
        textP.style.color = "black"
        textP.style.fontSize = "26px"
        textPColor = ""
    }
})
