const app = document.querySelector(".app"),
 myName = document.querySelector("#inputName"),
 btn = document.querySelector("#btn")

const unList = document.createElement("ul") 
app.appendChild(unList)

btn.addEventListener("click", () => {
   let myList = document.createElement("li")
   myList.textContent = myName.value
   myName.value = ""
   unList.appendChild(myList)
})