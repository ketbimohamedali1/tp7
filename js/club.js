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