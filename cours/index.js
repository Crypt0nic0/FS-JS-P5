const obj = {
    // index : value,
    pseudo: "From Scratch",
    ville: "Bordeaux",
    admin: false,

    // Fonctions...
    direBonjour(){
        console.log("Salut ! Je suis " + this.pseudo);
    },

    direBonjour2: function () {
        console.log("Salut2 ! Je suis " + this.pseudo);
    }
}
console.log(obj);

// Ajouter
obj.age = 24;
console.log(obj);

// Supprimer
delete obj.age;
console.log(obj);

// Checker si une propriété existe
console.log("pseudo" in obj);
console.log("city" in obj);

// Parcourir l'objet
for(const key in obj)
{
    // console.log(key + " : " + obj[key]);
}

obj.direBonjour();
obj.direBonjour2();
