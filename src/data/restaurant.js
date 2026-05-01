export const info = {
  name: "Louka Pizza",
  phone: "03 20 42 14 19",
  address: "4, rue du 11 novembre 1918, Wambrechies (59118)",
  website: "www.louka-pizza.fr",
  facebook: "Louka Pizza",
  horaires: {
    "Mar–Jeu": "11h30–14h00 · 18h30–21h00",
    "Ven–Sam": "11h30–14h00 · 18h30–21h30",
    "Dim":     "18h30–21h00",
    "Jours fériés": "18h30–21h00",
    "Lundi":   "Fermé"
  },
  paiement: ["Espèces", "CB", "Tickets restaurant"],
  livraison: "Deliveroo"
}

export const pizzas = [
  {
    categorie: "Nos Pizzas",
    note: "Base au choix : crème fraîche ou tomate — Tailles : Ø21 / Ø26 / Ø30",
    items: [
      { nom: "Pizza du Mois",      desc: "Demander au patron",                                                                              prix: [10.30, 11.50, 13.50], moisPizza: true },
      { nom: "Margherita",         desc: "Tomates, mozzarella",                                                                             prix: [5.80,  7.00,  9.00]  },
      { nom: "Jambon",             desc: "Tomates, épaule, mozzarella",                                                                     prix: [6.80,  8.20,  10.20] },
      { nom: "Turinoise",          desc: "Tomates, gruyère, jambon, lardon, chorizo, olive, champignon",                                    prix: [9.80,  11.00, 13.00] },
      { nom: "Régina",             desc: "Tomates, jambon, champignons, mozzarella",                                                        prix: [7.80,  9.00,  11.00] },
      { nom: "Thon",               desc: "Tomates, thon, gruyère, olive",                                                                   prix: [8.10,  9.30,  11.30] },
      { nom: "Bolognaise",         desc: "Viande de bœuf haché, mozzarella",                                                               prix: [7.80,  9.00,  11.00] },
      { nom: "Joka",               desc: "Sauce, viande de bœuf haché, mozzarella, oignons, poivron, merguez, œuf",                        prix: [9.50,  10.70, 12.70] },
      { nom: "Chorizo",            desc: "Tomates, olives, chorizo, oignons, poivrons, fromage",                                            prix: [8.50,  9.70,  11.70] },
      { nom: "3 Fromages",         desc: "Tomates, gruyère, mozzarella, chèvre",                                                            prix: [9.30,  10.50, 12.50] },
      { nom: "4 Fromages",         desc: "Tomates, gruyère, mozzarella, chèvre, gorgonzola",                                               prix: [10.40, 11.60, 13.60] },
      { nom: "Orientale",          desc: "Tomates, merguez, oignons, mozzarella, œuf",                                                      prix: [8.30,  9.50,  11.50] },
      { nom: "Calzone",            desc: "Tomates, jambon, champignons, mozzarella, œuf",                                                   prix: [8.30,  9.50,  11.50] },
      { nom: "Carbonara",          desc: "Crème fraîche, lardons, mozzarella",                                                              prix: [8.50,  9.70,  11.70] },
      { nom: "Biquette",           desc: "Tomates, gruyère, chèvre, avec ou sans miel",                                                     prix: [9.30,  10.50, 12.50] },
      { nom: "Louka",              desc: "Tomates, basilic, mozzarella, jambon de parme, roquette, vinaigre balsamique",                   prix: [9.80,  11.00, 13.00] },
      { nom: "Maroilles",          desc: "Tomates, gruyère, maroilles",                                                                     prix: [9.20,  10.50, 12.50] },
      { nom: "Vieux Lille",        desc: "Vieux Lille, lardons, oignons, gruyère, œuf, crème fraîche",                                     prix: [9.50,  10.70, 12.70] },
      { nom: "Milanaise",          desc: "Tomates, thon, câpre, anchois, mozzarella",                                                       prix: [8.50,  9.70,  11.70] },
      { nom: "Napolitaine",        desc: "Tomates, olive, câpres, anchois, mozzarella",                                                     prix: [7.80,  9.00,  11.00] },
      { nom: "Savoyarde",          desc: "Crème fraîche, gruyère, oignon, pomme de terre, lardons, reblochon",                             prix: [9.60,  10.80, 12.80] },
      { nom: "Du Chef",            desc: "Tomates, jambon, merguez, chorizo, œuf, oignon, gruyère",                                        prix: [9.50,  10.70, 12.70] },
      { nom: "Paysanne",           desc: "Crème fraîche, jambon, champignon, gruyère, oignon, œuf, chèvre",                                prix: [9.50,  11.70, 12.70] },
      { nom: "Végétarienne",       desc: "Tomates, oignon, poivron, olive, mozzarella, artichaut",                                         prix: [8.20,  9.40,  11.40] },
      { nom: "Royale",             desc: "Tomates, jambon, champignon, chorizo, mozzarella, oignon, poivron, olive, artichaut",             prix: [9.90,  11.10, 13.10] },
      { nom: "Salmoné",            desc: "Tomates, saumon, gruyère, crème fraîche",                                                         prix: [10.00, 11.20, 13.20] },
      { nom: "St Jacques",         desc: "Tomates, St Jacques, gruyère, crème fraîche",                                                     prix: [10.30, 11.50, 13.50] },
      { nom: "Fruit de Mer",       desc: "Cocktail de fruit de mer, gruyère, tomates",                                                     prix: [9.00,  10.20, 12.20] },
      { nom: "Kebab",              desc: "Tomates, mozzarella, kebab, oignon",                                                              prix: [8.60,  9.80,  11.80] },
      { nom: "La Méditerranéenne", desc: "Tomates, thon, oignon, poivron, olive, œuf, anchois, mozzarella",                                prix: [8.80,  10.00, 12.00] },
      { nom: "Sucré Salé",         desc: "Tomates, jambon, mozzarella, ananas, crème fraîche",                                             prix: [9.10,  10.30, 12.30] },
      { nom: "La Catalane",        desc: "Tomates, oignon, poivron, lardon, œuf, mozzarella",                                              prix: [9.10,  10.30, 12.30] },
      { nom: "La Wambrecitaine",   desc: "Crème fraîche, chorizo, thon, gruyère, oignon, œuf",                                             prix: [9.50,  10.70, 12.70] },
      { nom: "La Provençale",      desc: "Tomates, champignon, oignon, poivron, œuf, chèvre, gruyère",                                     prix: [9.00,  10.20, 12.20] },
      { nom: "La Divina",          desc: "Tomates, mozzarella, saumon, beurre à l'ail, champignon, olive",                                 prix: [11.00, 12.20, 14.20] },
      { nom: "Pollo",              desc: "Crème fraîche, mozzarella, poivron, poulet, champignon, œuf",                                    prix: [9.50,  10.70, 12.70] },
    ]
  }
]

export const supplements = { label: "Suppléments", prix: [1.00, 1.30, 1.30] }

export const plats = [
  {
    categorie: "Pâtes & Gratins",
    items: [
      { nom: "Cannelloni",                        desc: "Bœuf, mozzarella, parmesan, persil",                      note: "sur commande 2 jrs avant", prix: 8.50 },
      { nom: "Macaronis ou Spaghettis Bolognaise", desc: "Viande de bœuf haché",                                   note: null,                        prix: 7.50 },
      { nom: "Macaronis ou Spaghettis Carbonara",  desc: "Crème fraîche, lardons, porc",                            note: null,                        prix: 8.00 },
      { nom: "Macaronis ou Spaghettis au Saumon",  desc: "Crème fraîche, saumon",                                   note: null,                        prix: 9.00 },
      { nom: "Lasagne",                            desc: "Bœuf et jambon",                                          note: "sur commande 2 jrs avant", prix: 8.50 },
      { nom: "Macaronis ou Spaghettis au 3 Fro",  desc: "Mozza, gruyère, parmesan",                                note: null,                        prix: 8.50 },
    ]
  },
  {
    categorie: "Entrées & Spécialités",
    items: [
      { nom: "Arancini",      desc: "Boule de riz farcie, bœuf haché, petits pois, sauce tomate, mozzarella, chapelure", note: "sur commande 2 jrs avant", prix: 5.00 },
      { nom: "Poivron Farci", desc: "Poivron, farce de bœuf",                                                              note: "sur commande 2 jrs avant", prix: 8.00 },
    ]
  }
]

export const boissons = [
  {
    categorie: "Nos Vins",
    tag: "À emporter",
    note: "L'abus d'alcool est dangereux pour la santé, à consommer avec modération.",
    hasFormat: true,
    items: [
      { nom: "Bardalino clasmil DOC (rouge ou rosé)",         format: "75 cl",   prix: 15.00 },
      { nom: "Bardalino clasmil DOC (rouge ou rosé)",         format: "37,5 cl", prix: 8.00  },
      { nom: "Lambrusco Dell'emi (rouge ou rosé) — pétillant", format: "75 cl",   prix: 14.00 },
    ]
  },
  {
    categorie: "Nos Bières",
    tag: "À emporter",
    hasFormat: true,
    items: [
      { nom: "Heineken",            format: "25 cl (canette)", prix: 3.00 },
      { nom: "Desperados",          format: "33 cl (canette)", prix: 4.00 },
      { nom: "Leffe",               format: "33 cl (canette)", prix: 4.50 },
      { nom: "Bière de Wambrechies", format: "33 cl (canette)", prix: 4.50 },
    ]
  },
  {
    categorie: "Boissons Fraîches",
    tag: "À emporter",
    hasFormat: false,
    items: [
      { nom: "Coca-Cola, Coca Zero, Orangina, Fanta, Perrier, Icetea…", prix: 2.00 },
      { nom: "Eau — 50 cl",                                              prix: 1.50 },
      { nom: "San Pellegrino — 50 cl",                                   prix: 3.50 },
    ]
  }
]

export const desserts = [
  { nom: "Tiramisu Café",                                         prix: 3.50 },
  { nom: "Mousse au chocolat",                                    prix: 3.50 },
  { nom: "Salade de Fruits",                                      prix: 4.00 },
  { nom: "Glace Häagen-Dazs — 100 cl",                           prix: 3.50 },
  { nom: "Mystère vanille cœur meringue (parfum au choix) — 100 cl", prix: 4.00 },
]
