const personne = {
    nom : "Djongon", 
    prenom : "junior",
    appeller : function () {
       // console.log("Viens", this.prenom)
    }
};

personne.age = 45;
console.log("Junior a :", personne.age, "ans")
//personne.appeller()
//Afficher la valeur d'une propriété 
//console.log(personne.nom, personne.prenom)