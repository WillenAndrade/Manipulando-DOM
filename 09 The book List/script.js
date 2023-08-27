const exercisesList = document.querySelector(".exercises")
const unorderedList = document.createElement("ul")
const myBooks = document.querySelector(".myBooks")
const btnBooks = document.querySelector(".btnBooks")
myBooks.appendChild(unorderedList)

const books = [
    {
        title: "Domain-Driven Design",
        author: "Eric Evans"
    }, 
    {
        title: "Clean Code", 
        author: "Robert Cecil Martin"
    }, 
    {
        title: "The Pragmatic Programmer",
        author: "Thomas David, Hunt Andrew"
    }
]

//inputs checkbox 
const primeira = document.querySelector("#primeira")
const segunda = document.querySelector("#segunda")
const terceira = document.querySelector("#terceira")
const quarta = document.querySelector("#quarta")
const quinta = document.querySelector("#quinta")
const sexta = document.querySelector("#sexta")
const setima = document.querySelector("#setima")

//label of checkbox 
const labelPrimeira = document.querySelector("#labelPrimeira")
const labelSegunda = document.querySelector("#labelSegunda")
const labelTerceira = document.querySelector("#labelTerceira")
const labelQuarta = document.querySelector("#labelQuarta")
const labelQuinta = document.querySelector("#labelQuinta")
const labelSexta = document.querySelector("#labelSexta")
const labelSetima = document.querySelector("#labelSetima")

books.forEach((book) => {
    let listItem = document.createElement("li")
    listItem.textContent = `${book.title}, ${book.author}`
    unorderedList.appendChild(listItem)
})

primeira.addEventListener("change", () => {
    if(primeira.checked) {
        labelPrimeira.style.textDecoration = "line-through green"
         
    } else {
        labelPrimeira.style.textDecoration = "none"
    }
})

segunda.addEventListener("change", () => {
    if(segunda.checked) {
        labelSegunda.style.textDecoration = "line-through green"
    } else {
        labelSegunda.style.textDecoration = "none"
    }
})

terceira.addEventListener("change", () => {
    if(terceira.checked) {
        labelTerceira.style.textDecoration = "line-through green"
    } else {
        labelTerceira.style.textDecoration = "none"
    }
})

quarta.addEventListener("change", () => {
    if(quarta.checked) {
        labelQuarta.style.textDecoration = "line-through green"
    } else {
        labelQuarta.style.textDecoration = "none"
    }
})

quinta.addEventListener("change", () => {
    if(quinta.checked) {
        labelQuinta.style.textDecoration = "line-through green"
    } else {
        labelQuinta.style.textDecoration = "none"
    }
})

sexta.addEventListener("change", () => {
    if(sexta.checked) {
        labelSexta.style.textDecoration = "line-through green"
    } else {
        labelSexta.style.textDecoration = "none"
    }
})

setima.addEventListener("change", () => {
    if(setima.checked) {
        labelSetima.style.textDecoration = "line-through green"
    } else {
        labelSetima.style.textDecoration = "none"
    }
})

btnExercises = document.querySelector(".btnExercises")

btnExercises.addEventListener("click", () => {
    exercisesList.classList.toggle("active")
})

btnBooks.addEventListener("click", () => {
    myBooks.classList.toggle("active")
})
