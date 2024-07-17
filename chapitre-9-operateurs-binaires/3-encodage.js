const FLAG_RESPONSE = 0x20;  // Flag de demande de réponse
const FLAG_AUDIO = 0x10;     // Flag d'activation de l'audio

const MASK_LEVEL = 0x0f;     // Masque du volume audio


/**
 * Encode la commande en binaire sur un octet.
 * @param {object} data La commande à encoder.
 * @returns l'entier contenant les données en binaire.
 */
function encodeCommand(data) {
  // Priorité
  let command = (0x03 & data.priority) << 6;

  // Ajout des flags
  if (data.requireResponse) {
    command |= FLAG_RESPONSE;
  }
  if (data.audioEnabled) {
    command |= FLAG_AUDIO;
  }

  // Ajout du volume de l'équipement audio
  return command | (MASK_LEVEL & data.audioLevel);
}

/**
 * Décode la commande binaire en objet JavaScript.
 * @param {number} command La commande encodée en binaire.
 * @returns La commande décodée sous forme d'objet.
 */
function decodeCommand(command) {
  return {
    priority: command >> 6 & 0x03,
    requireResponse: (command & FLAG_RESPONSE) != 0,
    audioEnabled: (command & FLAG_AUDIO) != 0,
    audioLevel: MASK_LEVEL & command,
  };
}


// Conversion des données
let binary = encodeCommand({
  priority: 2,
  requireResponse: false,
  audioEnabled: true,
  audioLevel: 10,
});

console.log(binary.toString(2).padStart(8)); // Affichage binaire
console.log(decodeCommand(binary));
