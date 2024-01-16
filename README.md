# TO DO

- [ ] favori : ajouter un span avec le nombre de favoris

### card display

- [ ] creer des cartes individually avec liste similaires
- [ ] logique coup de coeur
- [ ] ajouter lien image et bouton decouvrir
- [ ] ajouter un click sur les genres pour relancer une recherche avec ce genre

### filter module

- [ ] ajouter d'autres liste de filter (annee, note) et un bouton de recherche, avec la fermeture des listes quand une nouvelle est ouverte ou la recherche lancee.

### api request

- [ ] creer une nouvelle page pour les films avec navigation dynamique. les donnes sont dans le store. les defillement y doit etre stocker aussi.
- [ ] tri par category

- [ ] creer un isLoading
- [ ] ajouter infinit scroll ?
- [ ] creer plein de liste pour les bonus
- [ ] creer des sliders pour les listes bonus "decouvrer une de nos listes" ?

### store

- redux ou zustand

```

```

# Done

**06/01/2023**

- [x]mettre le top et flop en numero avec une props reverse

**07/01/2023**

- [x] differentes couleurs sur les genres
- [x] mettre le title en grid
- [x] media query screen size
- [x] arranger les boutons
- [x] top flop
- [x] transition sur le sort

**08/01/2023**

- [x] ~~-ajouter un effet de collapse sur les list~~ fait mais finalement cela ne rend pas terrible. Bon entrainement pour framer motion cela dit!
- [x] Debut de renommage des classes de styled
- [x] separations de certains composant et restructuration de composants imbriques

**09/01/2023**

- [x] boutton pour remonter en haut quand une page a ete scroll
- [x] debut de restructuration du site
- [ ] ~~liste de favoris a mettre en resultats de recherche~~ !?

**10/01/2023**

- [x] ajouter une div absolute en mobile pour les filtres

**11/01/2023**

- [x] MediqQuery normaliser depuis breakpoints.js
- [x] reprendre les composants movie card pour reseparer certains comme le movie genre.
- [x] reprendre les composants filter, creer un title generique, et un font generique avec props enfant
- [x] mettre des cancel pour tout les filtres avec un background bleu quand ils sont actifs
- [x] ajouter un before et after pour les listes de filtres

**13/01/2023**

- reprise de du graphisme du site
- refactorisation de la gestion des genres

**15/01/2023**

- creation d'un store sur Redux
- reprise du genre et de la barre de recherche dans les actions pour qu'ils soient global

**16/01/2023**

- creation des variables pour les favoris dans le store
- [x] refonte des actions sur redux, creation d'un objet avec tout les filters
- [x] deplacer les requetes API dans redux

**17/01/2023**

- [ ] faire la logique des favoris en localstorage
- [ ] faire la logique du display pour afficher la derniere recherche sur le store
- [ ] faire une variable en plus lors de l'ajout de favoris avec un use effect dans l'icone de la barre de recherche. soit mettre un set timeout dans la fonction pour la faire passer de true a false, soit mettre le timeout dans le use effect.
