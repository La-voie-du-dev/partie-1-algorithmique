/**
 * Vente de la quantité et mise à jour de l'item.
 *
 * @param {array} item l'objet de l'inventaire à vendre.
 * @param {*} count le nombre d'item à vendre
 * @returns La quantité d'or obtenu
 */
function sell(item, count) {
    item.quantity -= count;

    return count * 5;
}

// ============================ MAIN ==============================

// Inventaire du personnage
let items = [
  {name: "Trousse de soin", quantity: 5},
  {name: "Or", quantity: 105},
  {name: "Bois", quantity: 20},
];

// Récupération des trousses de soin
let health = items[0];

// Vente de trousses de soin
let gold = sell(health, 2)

// Modification de la quantité d'or
items[1].quantity += gold;

// Affichage de l'inventaire
console.log(items);
