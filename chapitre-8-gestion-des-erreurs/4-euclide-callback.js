const DIV_BY_ZERO = 0;
const NEGATIVE_MEMBERS = 1;

/**
 * Division Euclidienne retournant le quotient et le reste.
 * 
 * @param {number} dividend Le nombre à diviser.
 * @param {number} divider Le diviseur.
 * @param {Function} callback La fonction à appeler pour notifier
 *                            le résultat [quotient, reste].
 */
function asyncEuclide(dividend, divider, callback) {
  if (divider === 0) {
    callback(DIV_BY_ZERO, null);
  } else if (dividend < 0 || divider < 0) {
    callback(NEGATIVE_MEMBERS, null);
  } else {
    let quotient = 0;
    let rest = dividend;

    // Calcul du reste via une boucle
    while (rest >= divider) {
      rest -= divider;

      // Mise à jour du quotient
      quotient++;
    }

    callback(null, [quotient, rest]);
  }
}


/**
 * Callback à utiliser pour la fonction asyncEuclide.
 *
 * @param {number} error Le code erreur ou null si l'exécution a réussie.
 * @param {Array} result Un tableau de la forme [quotient, reste] ou null
 *                       en cas d'échec.
 */
function onEuclideCompleted(error, result) {
  if (error === null) {
    console.log([result[0], result[1]]);
  } else {
    console.log(
      error === DIV_BY_ZERO
        ? "Le diviseur ne peut pas être 0"
        : "Calcul avec un dividende ou un diviseur négatif n'est pas pris en charge"
    );
  }
}


// Appels en erreur
asyncEuclide(10, 0, onEuclideCompleted);
asyncEuclide(-20, 4, onEuclideCompleted);
// Appels donnant lieu à un résultat
asyncEuclide(20, 4, onEuclideCompleted);
asyncEuclide(21, 4, onEuclideCompleted);
