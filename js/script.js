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

for (let i = 0; i < teamMembers.length; i++) {
    const curElement = teamMembers[i];
    console.log(curElement.name);
    console.log(curElement.profession);
    console.log(curElement.image);

}

