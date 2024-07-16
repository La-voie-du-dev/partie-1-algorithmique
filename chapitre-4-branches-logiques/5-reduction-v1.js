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
let price;
if (userType === CHILD) {
  // -10 €
  price = 10;
} else if (userType === YOUNG) {
  // -5 €
  price = 15;
} else if (userType === STUDENT || userType === SENIOR) {
  // -3 €
  price = 17;
} else {
  price = 20;
}

console.log("Prix :", price);
