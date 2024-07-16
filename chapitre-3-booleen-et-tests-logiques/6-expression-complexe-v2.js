// Informations sur la personne
let birthYear = 2000;

let consecutiveWorkYears = 2;
let trainingYears = 2;

let accountBalance = 500;

let isWorking = false;


const CURRENT_YEAR = 2025;


// Vérifier l'éligibilité de la personne à une subvention sociale, les critères imaginés sont les suivants :
//  - la personne doit avoir plus de 22 ans
//  - la personne ne doit pas travailler
//  - soit la personne a travaillé plus de 2 ans, soit la durée de travail et de formation est d'au moins 4 ans
//  - son patrimoine est évalué au maximum à 5 000 €

console.log(
    // La personne ne doit pas travailler
    !isWorking
    // ET le patrimoine est évalué au maximum à 5 000 €
    && accountBalance <= 5000
    // ET
    && (
        // la personne a travaillé plus de 2 ans
        consecutiveWorkYears >= 3
        // OU la durée de travail et de formation est d'au moins 4 ans
        || (consecutiveWorkYears + trainingYears) >= 4
    )
    // ET la personne doit avoir plus de 22 ans
    && (CURRENT_YEAR - birthYear) > 22
);
