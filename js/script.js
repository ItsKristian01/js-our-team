const teamMembers = [
    {
      name: "Wayne Barnett",
      profession: "Founder & CEO",
      image: "wayne-barnett-founder-ceo.jpg"
    },
   {
    name: "Angela Caroll",
    profession: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg"
   },
   {
     name: "Walter Gordon",
     profession: "Office Manager",
     image: "walter-gordon-office-manager.jpg"
   },
   {
     name: "Angela Lopez",
     profession: "Social Media Manager",
     image: "angela-lopez-social-media-manager.jpg"
   },
   {
     name: "Scott Estrada",
     profession: "Developer",
     image: "scott-estrada-developer.jpg"
   },
   {
     name: "Barbara Ramos",
     profession: "Graphic Designer",
     image: "barbara-ramos-graphic-designer.jpg"
   }
]

// console.log(teamMembers);
const rowElem = document.querySelector(".row");
let teamElem = "";

for (let i = 0; i < teamMembers.length; i++) {
    const curElement = teamMembers[i];
    teamElem += `
    <div class="card">
    <img src="" class="card-img-top" alt="">
    <div class="card-body">
      <p>Name: ${curElement.name} </p>
      <p>Profession: ${curElement.profession} </p>
      <p>Profession: ${curElement.image} </p>
    </div>
  </div>`;
    console.log(curElement.name);
    console.log(curElement.profession);
    console.log(curElement.image);
}

console.log(teamElem);
rowElem.innerHTML = teamElem;


