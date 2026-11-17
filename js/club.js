console.log("---- Exercice 1 ----");
const cotisation=25.5;
console.log(cotisation)
const cotisationReduite=(cotisation*15)/100
console.log(cotisation.toFixed(2))
p=prompt("Votre prénom ?")
prenom=p.trim()
prenomPropre=prenom[0].toUpperCase()+(prenom.slice(1,prenom.length)).toLowerCase()
console.log(prenomPropre);
e='${prenomPropre}@club.tn';
email=e.toLowerCase()
console.log(email.includes("@"))
console.log("---- Exercice 2 ----");
const aujourdhui = new Date()
const jours=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"];
const mois = [
  "janvier",
  "fevrier",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "aout",
  "septembre",
  "octobre",
  "novembre",
  "decembre"
];
console.log(
  `Nous sommes le ${jours[aujourdhui.getDay()]} ${aujourdhui.getDate()} ` +
    `${mois[aujourdhui.getMonth()]} ${aujourdhui.getFullYear()}`,
);

console.log("---- Exercice 3 ----");

const ateliers = ["HTML", "CSS", "JavaScript", "Git"];
console.log("Longueur :", ateliers.length);
console.log("Premier :", ateliers[0]);
console.log("Dernier :", ateliers[ateliers.length - 1]);
ateliers.push("Bootstrap");
ateliers.pop();
console.log("Contient PHP :", ateliers.includes("PHP"));
let compteur = 1;
for (const atelier of ateliers) {
  console.log(`${compteur}. ${atelier}`);
  compteur++;
}
console.table(ateliers);
const notes = [12, 8, 15, 10, 17, 6, 2];
console.log("sort() par défaut :", notes.slice().sort());
notes.sort((a, b) => a - b);
console.log(notes.join(" - "));
const admises = notes.filter((n) => n >= 10);
const sur100 = notes.map((n) => n * 5);
const somme = notes.reduce((total, n) => total + n, 0);
const moyenne = (somme / notes.length).toFixed(2);
console.log("admises :", admises);
console.log("sur100 :", sur100);
console.log("somme :", somme);
console.log("moyenne :", moyenne);

