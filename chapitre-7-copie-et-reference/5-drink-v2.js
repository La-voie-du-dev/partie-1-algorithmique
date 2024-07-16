// Déclaration des type de liquides
const WATER = 0;
const BEER = 1;
const WINE = 2;

/**
 * Fonction permettant de boire dans un verre.
 *
 * @param {object} glass Le verre dans lequel boire.
 * @param {string} name Le nom de la variable faisant référence au verre.
 */
function drink(glass, name) {
  glass.liquid.quantity -= 5;

  console.log("  drink:  " + name + ".liquid.quantity =", glass.liquid.quantity);
}

// ============================ MAIN ==============================

// Paramétrage du verre
let glass = {
  quantity: 35,
  liquid: {
    quantity: 33,
    type: WINE,
  },
};

// Création du second verre à partir du premier
let other = {
  quantity: glass.quantity,
  liquid: {
    quantity: glass.liquid.quantity,
    type: glass.liquid.type,
  },
};
  

// Affichage des informations
console.log("Before drink");
console.log("  main:   glass.liquid.quantity =", glass.liquid.quantity);
console.log("  main:   other.liquid.quantity =", other.liquid.quantity);

// Boire dans le MAIN
console.log("Drink");

glass.liquid.quantity -= 5;
console.log("  main:   glass.liquid.quantity =", glass.liquid.quantity);

drink(other, "other");
console.log("  main:   other.liquid.quantity =", other.liquid.quantity);
