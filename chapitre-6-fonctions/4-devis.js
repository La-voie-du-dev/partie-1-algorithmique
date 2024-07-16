function addInsuranceOptionToQuote(total) {
  // Prix de l'assurance : 10 €
  let productPrice = 10;

  total += productPrice;
  quoteVersion++;

  // Affichage des modifications dans la fonction
  console.log('Dans la fonction ', [quoteVersion, total, productPrice]);
}

let total = 20; // 20 € de frais de dossier
let quoteVersion = 1;

// Prix de base du produit : 100 €
let productPrice = 100;

total += productPrice;

// Affichage des valeurs avant appel
console.log('Avant la fonction', [quoteVersion, total, productPrice]);

addInsuranceOptionToQuote(total);

// Affichage des valeurs après appel
console.log('Après la fonction', [quoteVersion, total, productPrice]);
