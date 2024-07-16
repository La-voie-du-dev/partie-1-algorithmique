# -*- coding: UTF-8 -*-

def sell(item, count):
    """Vente de la quantité, mise à jour de l'item et retourne la
    quantité d'or."""
    item["quantity"] -= count

    return count * 5


if __name__ == "__main__":
    # programme principal

    # Inventaire du personnage
    items = [
        {"name": "Trousse de soin", "quantity": 5},
        {"name": "Or", "quantity": 105},
        {"name": "Bois", "quantity": 20},
    ]

    # Récupération des trousses de soin
    health = items[0]

    # Vente de trousses de soin
    gold = sell(health, 2)

    # Modification de la quantité d'or
    items[1]["quantity"] += gold

    # Affichage de l'inventaire
    print(items)
