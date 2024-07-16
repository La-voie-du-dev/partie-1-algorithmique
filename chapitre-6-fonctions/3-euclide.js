/**
 * Division Euclidienne retournant le quotient et le reste.
 *
 * @param {number} dividend Le nombre à diviser.
 * @param {number} divider Le diviseur.
 * @returns {array} Un tableau de la forme [quotient, reste].
 */
function euclide(dividend, divider) {
  if (divider === 0) {
    console.log("Le diviseur ne peut pas être 0");
    return;
  }
  if (dividend < 0 || divider < 0) {
    console.log(
      "Calcul avec un dividende ou un diviseur négatif n'est pas pris en charge"
    );
    return;
  }

  let quotient = 0;
  let rest = dividend;

  // Calcul du reste via une boucle
  while (rest >= divider) {
    rest -= divider;

    // Mise à jour du quotient
    quotient++;
  }

  return [quotient, rest];
}

// Erreurs qui retourne undefined
console.log(euclide(10, 0));
console.log(euclide(-20, 4));
// Appels qui aboutissent à un résultat
console.log(euclide(20, 4));
console.log(euclide(21, 4));
