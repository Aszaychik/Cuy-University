const authorData = [
  {
    author: "aszaychik",
    email: "aszaychik@gmail",
    github: "https://github.com/Aszaychik",
  },
  {
    author: "Agoes Budi Satriya",
    email: "agoeslmg1967@gmail.com",
    facebook: "https://www.facebook.com/AsZaychik/",
  },
];

authorData.forEach((result) => {
  console.log(result);
});

class animal {
  color;
  skill;
  constructor(name) {
    this.name = name;
  }
  set newColor(color) {
    this.color = color;
  }

  set newSkill(skill) {
    this.skill = skill;
  }

  get detailAnimal() {
    return `Hi my pet name is ${this.name}, the color is ${this.color}, and have skill ${this.skill}`;
  }
}

const cat = new animal("Neko");
cat.newColor = "Black";
cat.newSkill = "Immortal";

const getDetailAuthor = () => {
  authorData.map(function (result, i) {
    console.table(authorData);
    console.log("cat :>> ", cat.detailAnimal);
  });
};
