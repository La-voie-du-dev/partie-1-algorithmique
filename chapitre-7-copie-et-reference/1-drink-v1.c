#include <stdio.h> 


// Type de liquide pris en charge. 
enum LiquidType {
    WATER,  // 0
    BEER,   // 1
    WINE    // 2
};


// Représentation du liquide.
struct Liquid {
    // La quantité de liquide en cl.
    int quantity;
    // Le type de liquide.
    enum LiquidType type;
};


// Représentation d'un verre.
struct Glass {
    // La contenance en cl.
    int quantity;
    // Le liquide contenu dans le verre.
    struct Liquid liquid;
};


/**
 * Fonction permettant de boire dans un verre.
 *
 * @param glass Le verre dans lequel boire.
 * @param name Le nom de la variable faisant référence au verre.
 */ 
void drink(struct Glass glass, const char *name) {
    glass.liquid.quantity -= 5;

    printf("  drink:  %s.liquid.quantity = %d\n", name,
           glass.liquid.quantity); 
}


/**
 * Programme principal.
 */
int main() {
    struct Glass glass;

    // Paramétrage du verre
    glass.quantity = 35;
    glass.liquid.quantity = 33;
    glass.liquid.type = WINE;

    // Création d'un second verre identique au premier verre "glass"
    struct Glass other =  glass;

    // Affichage des informations
    printf("Before drink\n");
    printf("  main:   glass.liquid.quantity = %d\n",
           glass.liquid.quantity);
    printf("  main:   other.liquid.quantity = %d\n",
           other.liquid.quantity);

    // Boire dans la fonction main
    printf("Drink\n");
    glass.liquid.quantity -= 5;
    printf("  main:   glass.liquid.quantity = %d\n",
           glass.liquid.quantity);

    drink(other, "other");
    printf("  main:   other.liquid.quantity = %d\n",
           other.liquid.quantity);

    return 0;
}
