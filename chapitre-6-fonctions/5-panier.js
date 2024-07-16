function computeCartTotal(cart) {
  // Le paramètre "cart" et la variable "total" sont accessibles dans
  //  toute la fonction
  let total = 0;

  for (let product of cart) {
    // "product" et "price" sont accessibles uniquement dans la boucle
    //  for each
    let price = 0;

    if (product.seller === 'Amazon') {
      // "percent" est accessible dans la branche if
      let percent = 1 - blackFridayReduction;

      price = percent * product.price;

      // Variables existantes à cette ligne :
      //  blackFridayReduction, cart, total, product, price, percent
    } else {
      price = product.price;

      // Variables existantes à cette ligne :
      //  blackFridayReduction, cart, total, product, price
    }

    total += price;

    // Variables existantes à cette ligne :
    //  blackFridayReduction, cart, total, product, price
  }

  // Variables existantes à cette ligne : blackFridayReduction, cart, total
  return total;
}

// "blackFridayReduction" est accessible dans tout le programme
let blackFridayReduction = 0.3;

computeCartTotal([
  {name: 'Clavier',             seller: 'Amazon',   price: 24.99},
  {name: 'Souris Gamer',        seller: 'Logitech', price: 59.99},
  {name: 'Support PC Portable', seller: 'Amazon',   price: 29.99},
]);
// Variables existantes à cette ligne : blackFridayReduction
