// Type d'utilisateur
const CHILD = 0;
const YOUNG = 1;
const STUDENT = 2;
const ADULT = 3;
const SENIOR = 4;


// On affecte une des constantes précédentes
const userType = ADULT;

// En fonction du type d'utilisateur attribuer une réduction
// Prix de base : 20 €
let price = 0;
switch (userType) {
  case CHILD:
    price = 10;
    break;
  case YOUNG:
    price -= 2;
  case STUDENT:
  case SENIOR:
    price -= 3;
  default:
    price += 20;
    break;
}

console.log("Prix :", price);
