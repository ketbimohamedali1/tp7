console.log("---- Exercice 5 ----");
const resultats = [
  { joueur: "Sarra", score: 7 },
  { joueur: "Ali", score: 10 },
  { joueur: "Yasmine", score: 4 },
  { joueur: "Mohamed", score: 8 },
  { joueur: "Ines", score: 5 },
];
resultats.forEach((r) => {
  r.pourcentage = r.score * 10;
});
console.table(resultats);
resultats.sort((a, b) => b.score - a.score);
resultats.forEach(function (r, i) {
  console.log(
    i + 1 + "." + r.joueur + "—" + r.score + "/10(" + r.pourcentage + " %)",
  );
});
const au_moins_3 = resultats.every((r) => r.score >= 3);
const A_10 = resultats.some((r) => r.score === 10);
const repasser = resultats.find((r) => r.score < 5);
console.log("Tous ont au moins 3 :", au_moins_3);
console.log("Quelqu'un a obtenu 10 :", A_10);
console.log("Premier à repasser le quiz :", repasser);
let somme = 0;
resultats.forEach(function (r) {
  somme = somme + r.score;
});
const reunion = new Date(2026, 11, 15, 14, 30);
const aujourdhui = new Date();
const msParJour = 1000 * 60 * 60 * 24;
const stats = {
  nbJoueurs: resultats.length,
  moyenne: Math.round((somme / resultats.length) * 10) / 10,
  meilleur: resultats[0],
  prochaineReunion: reunion,
  joursRestants:
    (new Date(2026, 11, 15, 14, 30) - new Date()) / (1000 * 60 * 60 * 24),
  afficher() {
    console.log("Nombre de joueurs : " + this.nbJoueurs);
    console.log("Moyenne : " + this.moyenne);
    console.log("Meilleur : " + this.meilleur.joueur);
    console.log("Réunion : " + this.prochaineReunion);
    console.log("Jours restants : " + this.joursRestants);
  },
};
stats.afficher();