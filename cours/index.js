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



// OBTENIR LES CLES D'UN OBJET
const keys = Object.keys(obj);
console.log(keys);

// OBTENIR LES VALEURS
const values = Object.values(obj);
console.log(values);

const nestedArray = Object.entries(obj);
console.log(nestedArray);

const obj2 = {
    taille: "1m80",
    poids: "75kg"
}

// FUSIONNER LES OBJETS
const fusion = Object.assign({}, obj, obj2);
console.log(fusion);

// EMPECHER LES MODIFICATIONS
const newObj = Object.freeze(obj);
newObj.pseudo = "test";
console.log(newObj);



//=========================================================================//

//                CONSTRUCTEURS D'OBJETS

//=========================================================================//

// --- Fonction constructeur ---

function User(pseudo, ville){
    this.pseudo = pseudo;
    this.ville = ville;

    this.getCity = function(){
        console.log(this.pseudo + " habite à " + this.ville);
    }
}

const user1 = new User('Cryptonico', 'Gidy');
console.log(user1);
user1.getCity();

// --- Factory functions ---

function User3(pseudo, ville){
    return {
        pseudo,
        ville
    }
}

const user4 = User3('CryptoNico2', 'Gidy2');
console.log(user4);


// --- LES CLASSES ---

class Utilisateur{
    constructor(pseudo, ville){
        this.pseudo = pseudo;
        this.ville = ville;
    }

    // Methodes

    sayMyName = function(){
        console.log('Bonjour je suis ' + this.pseudo);
    }

}

const user5 = new Utilisateur('CryptoNicoClass', 'GidyClass');

Utilisateur.prototype.sayCity = function(){
    console.log("J'habite à " + this.ville);
}

console.log(user5);
user5.sayMyName();
user5.sayCity();


// --- HERITAGE ---

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    saySomething(text){
        console.log(this.name + " dit : " + text);
    }
}

class Dog extends Animal{
    run(){
        console.log("Le chien court ! ");
    }
}

const rintintin = new Dog("rintintin", 16);
console.log(rintintin);
rintintin.saySomething("yeah");
rintintin.run();