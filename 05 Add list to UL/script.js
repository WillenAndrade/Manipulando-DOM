const fruitList = ["apple", "banana", "tomato"]
const fruitOne = "Orange"
const unorderedList = document.querySelector("#unorderedList")

fruitList.forEach((fruit) => {
    let listItems = document.createElement("li")
    listItems.textContent = fruit
    unorderedList.appendChild(listItems)
})

unorderedList.style.width = "300px"
unorderedList.style.margin = "50px auto"

