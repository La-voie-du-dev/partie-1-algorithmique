// Déclaration des rôles
const WARRIOR = 0;
const TRACKER = 1;
const WIZARD = 2;

// Déclaration du type d'arme
const SWORD = 0;
const DAGGER = 1;
const STAFF = 2;


/**
 * Calcule les dégâts de l'arme en fonction du rôle du personnage
 * et l'arme.
 *
 * @param {number} role Le rôle du personnage (int)
 * @param {object} weapon L'object représentant l'arme
 *                        (format {type: int, damage: number})
 * @returns {number} Dégâts avec bonus/malus appliqué à l'arme.
 */ 
function computeDamage(role, weapon) { 
  let bonus;

  // On applique un bonus de 20% à l'arme lorsque c'est le type
  //   préféré du rôle du personnage.
  switch (role) {
    case WARRIOR:
      bonus = weapon.type === SWORD ? 1.2 : 1;
      break;
    case TRACKER:
      bonus = weapon.type === DAGGER ? 1.2 : 1;
      break;
    case WIZARD:
      bonus = weapon.type === STAFF ? 1.2 : 1;
      break;
    default: 
      // Ne doit pas arriver, mais on traite le cas en ramenant
      //    les dégâts à 0.
      bonus = 0;
      break;
  }

  // Calcul des dégâts de l'arme
  return weapon.damage * bonus;
}

let sword = { type: SWORD, damage: 100 };

// Test de la fonction selon les 3 rôles
console.log({ 
  warrior: computeDamage(WARRIOR, sword),
  tracker: computeDamage(TRACKER, sword),
  wizard: computeDamage(WIZARD, sword),
  other: computeDamage(-1, sword),
});
