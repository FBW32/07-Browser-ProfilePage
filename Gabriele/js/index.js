// Your JS here!

// getting all the inputs
let form = document.querySelector("form")
let name = document.getElementById("name")
let date = document.getElementById("date")
let image= document.querySelector("input[type = file]")
let primaryCol = document.getElementById("primaryColor")
let secondaryCol = document.getElementById("secondaryColor")
let userText = document.querySelector("textarea")
let userSkills = document.querySelectorAll("input[type = checkbox]")
let reset = document.getElementById("reset")


// creating the even listener 
form.addEventListener("submit", (e) => {
    e.preventDefault()

    // checking which checkboxes users has checked
    let skills=[]
    userSkills.forEach(inp=>{
    if(inp.type === "checkbox"){
        if(inp.checked) {
            skills.push(inp.value) 
        }}}
    )
    let finalSkills = skills.join(" , ")  
    

    // creating all the output elements    
    let h1 = document.createElement("h1")
    h1.innerHTML = name.value
    h1.classList.add("center")

    let h4 = document.createElement("h4")
    h4.innerHTML = `${name.value} was born on ${date.value}`
    h4.classList.add("center")

    let picture = document.createElement("img")
    picture.src = image.value.split(`\\`)[2]
    picture.classList.add("center")


    let p = document.createElement("p")
    p.innerHTML = userText.value
    p.classList.add("bold")

    let p2 = document.createElement("p")
    p2 = `The programming skills of ${name.value} are ${finalSkills}`

     // creating container where to append all elements
     let div = document.createElement("div")
     div.style.backgroundColor = primaryCol.value
     div.style.color = secondaryCol.value
     div.classList.add("center")

     // appending elements to container
    div.append(h1, h4, picture, p, p2)

    // appending container to body
    document.body.append(div)

    reset.addEventListener("click", () => {
        div.style.display = "none"
    })

})