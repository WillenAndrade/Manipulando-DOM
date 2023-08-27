const w3rType = document.getElementById("w3r").getAttribute("type")
const w3rHreFlang = document.getElementById("w3r").getAttribute("hreflang")
const w3rRel = document.getElementById("w3r").getAttribute("rel")
const w3rTarget = document.getElementById("w3r").getAttribute("target")
const w3rHref = document.getElementById("w3r").getAttribute("href") 

const btn = document.querySelector("#btn")
btn.addEventListener("click", () => {
    window.alert(`This is the attributes that we have inside the "a" element: 
    type:${w3rType},
    hreflang: ${w3rHreFlang},
    rel: ${w3rRel},
    target: ${w3rTarget},
    href: ${w3rHref}`)
})
