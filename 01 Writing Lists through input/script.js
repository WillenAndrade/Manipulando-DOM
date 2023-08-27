const inputName = document.querySelector("#inputName"),
btnEnviar = document.querySelector("#btnEnviar"),
unLi = document.querySelector("#unLi")

btnEnviar.addEventListener("click", () => {
    list = document.createElement("li")
    let nome = inputName
    list.textContent = nome.value
    nome.value = ""
    unLi.appendChild(list)
    inputName.focus()
})