const colorRed = document.querySelector("#colorRed"),
colorGreen = document.querySelector("#colorGreen"),
colorWhite = document.querySelector("#colorWhite"),
colorBlack = document.querySelector("#colorBlack"),
colorSelect = document.querySelector("#colorSelect")
btn = document.querySelector("#btn")

btn.addEventListener("click", () => {
   switch(colorSelect.value){
    case "Red": 
    colorRed.parentNode.removeChild(colorRed)
    break;
    case "Green": 
    colorRed.parentNode.removeChild(colorGreen)
    break;
    case "White": 
    colorRed.parentNode.removeChild(colorWhite)
    break;
    case "Black": 
    colorRed.parentNode.removeChild(colorBlack)
    break;
   }
})