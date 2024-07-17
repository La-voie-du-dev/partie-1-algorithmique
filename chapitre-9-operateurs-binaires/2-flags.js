// Flag des préférences audios
const FLAG_MUSIC = 0x01;
const FLAG_AUDIO_EFFECTS = 0x02;

// Masque des bits des préférences audios : 0000 0011
const MASK_AUDIO = FLAG_MUSIC | FLAG_AUDIO_EFFECTS;

// Flag des préférences graphiques
const FLAG_ANTIALIASING = 0x10;
const FLAG_SHADOW = 0x20;
const FLAG_PARTICLES = 0x40;
const FLAG_HIGH_RESOLUTION = 0x80;


/**
 * Analyse et configure les options audio du jeu.
 *
 * @param {number} options Configuration audio au format binaire.
 */
function configureAudioPreferences(options) {
  if ((options & MASK_AUDIO) === MASK_AUDIO) {
    console.log("Tous les sons");
  } else if (options & FLAG_MUSIC) {
    console.log("Musique d'ambiance");
  } else if (options & FLAG_AUDIO_EFFECTS) {
    console.log("Effets sonores");
  } else {
    console.log("Mode muet");
  }
}

/**
 * Conversion de l'entier en paramètre au format binaire sur 1 octet.
 *
 * @param {number} integer Un entier positif à convertir.
 * @returns {string} La représentation binaire d'un entier 8 bits.
 */
function toIntBin(integer) {
  return integer.toString(2).padStart(8, "0");
}


// Des flags sont positionnés sur les bits qui concernent la
//  configuration graphique.
let gameOptions = FLAG_ANTIALIASING | FLAG_SHADOW | FLAG_PARTICLES;
console.log(toIntBin(gameOptions));

// Aucune option audio
configureAudioPreferences(gameOptions);

// Activation de toutes les options audios
gameOptions = gameOptions | FLAG_MUSIC | FLAG_AUDIO_EFFECTS;
configureAudioPreferences(gameOptions);

// Désactivation de la musique
gameOptions = gameOptions & ~FLAG_MUSIC;
configureAudioPreferences(gameOptions);

// Configurer uniquement la musique
gameOptions = gameOptions & ~FLAG_AUDIO_EFFECTS | FLAG_MUSIC;
configureAudioPreferences(gameOptions);

// Vérification des flags de la configuration graphique et audio
console.log(toIntBin(gameOptions));
