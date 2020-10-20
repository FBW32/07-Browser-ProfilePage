// Your JS here!
// 3. Create a reset button for the form.
let body=document.querySelector("body")
let form=document.querySelector("form")

let resetButton=document.createElement("button");
resetButton.innerHTML="Reset";
body.append(resetButton);

let createCVbutton= document.createElement("button");
createCVbutton.innerHTML="Create CV"
body.insertBefore(createCVbutton,resetButton);


let createProfile=()=>{
    let name=document.querySelector(".name").value;

    let birthday=document.querySelector(".birthday").value;
    let birthYear=birthday.split("-")[0];
    let thisYear=new Date().getFullYear(); //2020
    let year=thisYear-birthYear;


    let image=document.querySelector(".file").value.split(`\\`)[2]
    
    let firstColor=document.getElementById("primaryColor").value;
    let secondColor=document.getElementById("secondaryColor").value;

    let about=document.querySelector("textarea").value

    let javascript=document.querySelector(".Javascript");
    let ruby=document.querySelector(".Ruby");
    let python=document.querySelector(".Python");
    let java=document.querySelector(".Java");
    let php=document.querySelector(".PHP");
    let skillsArray=[];
    function controlChecked(checkbox){if(checkbox.checked){
        skillsArray.push(checkbox.classList[0])
    }}
    controlChecked(javascript);
    controlChecked(ruby);
    controlChecked(python);
    controlChecked(java);
    controlChecked(php);
    let skills=skillsArray.join();

    let div=document.createElement("div");
    div.style.backgroundColor=firstColor;
    div.style.color=secondColor;
    div.classList.add("CVdiv");
    div.classList.add("center");

    let h1=document.createElement("h1");
    h1.innerHTML=name;
    h1.classList.add("center")

    let h2=document.createElement("h2");
    h2.innerHTML=`${name} is ${year} years old.`
    h2.classList.add("center")

    let img=document.createElement("img");
    img.classList.add("center");
    img.src="./image/"+image;

    let h3=document.createElement("h3");
    h3.innerHTML=about;
    h3.classList.add("center")

    let para=document.createElement("p");
    para.innerHTML=`The programming skills of ${name} are: ${skills}`
    para.classList.add("center")

  
    let closeButton=document.createElement("button");
    closeButton.innerHTML="X";
    closeButton.classList.add("closeButton")

    closeButton.addEventListener("click",()=>{
        div.style.display="none"
    })


    div.append(closeButton,h1,h2,img,h3,para);
    body.append(div);

}
createCVbutton.addEventListener("click",createProfile);




