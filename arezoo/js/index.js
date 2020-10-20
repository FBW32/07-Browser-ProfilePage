// Your JS here!
let form = document.querySelector("form");
let cvPart = document.getElementById("cv");
let createCv = document.getElementById("createCV");
createCv.addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let birth = document.getElementById("date").value;
  let primaryColor = document.getElementById("primaryColor").value;
  let secondColor = document.getElementById("secondaryColor").value;
  let about = document.getElementById("about").value;
  let image = document.getElementById("img");
  cvPart.style.display = "hidden";
  cvPart.style.visibility = "visible";
  cvPart.style.backgroundColor = primaryColor;
  cvPart.style.color = secondColor;
  document.getElementById("userName").innerHTML = name;
  document.getElementById("age").innerHTML = calculateAge(birth) + " years old";
  let splitvalue = image.value.split(`\\`);
  let imageName = splitvalue[splitvalue.length - 1];
  let cvImage = document.getElementById("userImage");
  cvImage.src = imageName;
  cvImage.style.width = "200px";
  cvImage.style.height = "300px";
  document.getElementById("aboutUser").innerHTML = about;
  let javascript = document.querySelector(".javascript");
  let ruby = document.querySelector(".ruby");
  let python = document.querySelector(".python");
  let java = document.querySelector(".java");
  let php = document.querySelector(".php");
  let skillsArray = [];
  function controlChecked(checkbox) {
    if (checkbox.checked) {
      skillsArray.push(checkbox.classList[0]);
    }
  }
  controlChecked(javascript);
  controlChecked(ruby);
  controlChecked(python);
  controlChecked(java);
  controlChecked(php);
  let skills = skillsArray.join(",");
  cvSkills.innerHTML = `Programming skills are : ${skills}`;
  function calculateAge(date) {
    var today = new Date();
    var birthDate = new Date(date);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
});

let closebtn = document.getElementById("closeButton");
closebtn.addEventListener("click", () => {
  cvPart.style.visibility = "hidden";
});

let resetForm = document.getElementById("resetForm");
resetForm.addEventListener("click", (e) => {
  cvPart.style.visibility = "hidden";
  let element = form.elements;
  form.reset();
});
