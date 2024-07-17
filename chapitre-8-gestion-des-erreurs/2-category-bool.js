/**
 * Affiche dans la console la catégorie en fonction de l'age en paramètre.
 * @param {number} age L'age à catégoriser.
 * @return {boolean} true si l'affichage a eu lieu, false en cas d'erreur.
 */
function printAgeCategory(age) {
  // Dans la majorité des cas, ce sera en succès.
  //  Seul le cas d'échec modifie le boolean.
  let success = true;

  // Contrôle de l'age
  if (age <= 0) {
    // Impossible de traiter la catégorie -> ÉCHEC.
    success = false;
  } else if (age < 18) {
    console.log('enfant');
  } else if (age < 60) {
    console.log('adulte');
  } else {
    console.log('senior');
  }

  return success;
}


console.log([
  printAgeCategory(10),
  printAgeCategory(40),
  printAgeCategory(65),
  printAgeCategory(0),
]);
