const imageSrc = "https://crocoder.dev/icon.png"
const divImg = document.querySelector(".divImg")
const getImg = document.querySelector("#getImg")
let imgOn = true
let Img = document.createElement("img")

getImg.addEventListener("click", () => {
       if(imgOn == true) {
        Img.src = imageSrc
        divImg.appendChild(Img)
        divImg.style.display = "block"
        imgOn = !imgOn
       } else {
        divImg.style.display = "none"
        imgOn = !imgOn
       }
})