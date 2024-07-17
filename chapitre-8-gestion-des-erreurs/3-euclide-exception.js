// Déclaration des erreurs personnalisées.

class DivByZeroError extends Error {}   

class InvalidArguments extends Error {} 


/**
 * Division Euclidienne retournant le quotient et le reste.
 *
 * @param {number} dividend Le nombre à diviser.
 * @param {number} divider Le diviseur.
 * @returns {array} Un tableau de la forme [quotient, reste].
 * @throws DivByZeroError En cas de diviseur 0.
 * @throws InvalidArguments En cas de paramètre négatif.
 */
function euclide(dividend, divider) {
  if (divider === 0) {
    throw new DivByZeroError("Le diviseur ne peut pas être 0"); 
  } else if (dividend < 0 || divider < 0) {
    throw new InvalidArguments(
      "Calcul avec un dividende ou un diviseur négatif n'est pas pris en charge"
    );  
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


/**
 * Gère l'affichage des résultats de l'appel à la fonction euclide.
 *
 * @param {array} params Les paramètres à donner à la fonction euclide.
 */
function handleEuclide(params) {
  // Trace de début d'appel
  console.log("INFO: Début d'appel à la fonction euclide");

  try { 
    let dividend = params[0];
    let divider = params[1];

    // Tracer le résultat
    console.log(euclide(dividend, divider));
  } finally { 
    // Tracer dans tous les cas (échec ou réussite)
    console.log("DEBUG: Post traitement de la fonction euclide...");
  }

  // Trace de fin d'appel
  console.log("INFO: Fin d'appel à la fonction euclide");
}


// Déclaration des paramètres dans un tableau pour les utiliser
//  dans une boucle
const PARAMS = [
  [10, 0],
  [-20, 4],
  [20, 4],
  [21, 4],
]
for (let params of PARAMS) {
  // Marque de séparation début
  console.log("--------------------------------------------------");

  try { 
    // Affichage du résultat de la fonction euclide en cas de succès
    handleEuclide(params);
  } catch (err) { 
    // Affichage de l'erreur en cas d'échec la fonction euclide
    console.log("ERREUR: " + err.message);
  }

  // Marque de séparation fin
  console.log("--------------------------------------------------");
}
