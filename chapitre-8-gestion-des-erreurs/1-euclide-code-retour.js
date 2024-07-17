const OK = 0;
const DIV_BY_ZERO = 1;
const NEGATIVE_MEMBERS = 2;

/**
 * Division Euclidienne retournant le quotient et le reste.
 *
 * @param {number} dividend Le nombre à diviser.
 * @param {number} divider Le diviseur.
 * @returns {array} Un tableau de la forme [quotient, reste].
 */
function euclide(dividend, divider) {
  let result;
  if (divider === 0) {
    result = [DIV_BY_ZERO];
  } else if (dividend < 0 || divider < 0) {
    result = [NEGATIVE_MEMBERS];
  } else {
    let quotient = 0;
    let rest = dividend;
  
    // Calcul du reste via une boucle
    while (rest >= divider) {
      rest -= divider;
  
      // Mise à jour du quotient
      quotient++;
    }

    result = [OK, quotient, rest];
  }

  return result;
}

const result = euclide(21, 4);
if (result[0] === OK) {
  console.log([result[1], result[2]]);
} else {
  console.log(
    result[0] === DIV_BY_ZERO
      ? "Le diviseur ne peut pas être 0"
      : "Calcul avec un dividende ou un diviseur négatif n'est pas pris en charge"
  );
}
