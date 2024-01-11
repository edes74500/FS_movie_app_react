# TO DO

- [ ] tri par category
- [ ] creer des cartes individually avec liste similaires
- [ ] logique coup de coeur
- [ ] ajouter lien image et bouton decouvrir
- [ ] ajouter infinit scroll ?
- [ ] installer un store pour stocker les listes fixes
- [ ]creer des sliders pour les bonus ?
- [ ]creer plein de liste pour les bonus avec leur sort pas avec les memes boutons

- [ ] ajouter un click sur les genres pour relancer une recherche avec ce genre
- [ ] ajouter d'autres liste de filter (annee, ???) et un bouton de recherche, avec la fermeture des listes quand une nouvelle est ouverte ou la recherche lancee.

- [ ] favori : ajouter un span avec le nombre de favoris

- [ ] creer une nouvelle page pour les films avec navigation dynamique. les donnes sont dans le store. les defillement y doit etre stocker aussi.
- [ ] ajouter les requetes API dans redux
- [ ] creer un isLoading
- [ ] Reprendre Styled ! regfaire mediqQuery avec
- [ ] mettre des cancel pour tout les filtres avec un background bleu quand ils sont actifs

```
import customBreakpoints from "../styles/customBreakpoints";

/* Styles communs à toutes les tailles d'écran */
  desktop: "992px",
  tablet: "768px",
  mobile: "576px",

  ${customBreakpoints.lessThan('desktop')`
    /* Styles pour les écrans plus petits que la taille 'medium' */
  `}

  ${media.between('tablet', 'desktop')`
    /* Styles pour les écrans entre 'medium' et 'large' */
  `}

  ${media.greaterThan('desktop')`
    /* Styles pour les écrans plus grands que la taille 'large' */
  `}
`;
```

- [ ] ajouter un before et after pour les listes de filtres

# Done

**06/01/2023**

- [x]mettre le top et flop en numero avec une props reverse

**07/01/2023**

- [x] differentes couleurs sur les genres
- [x]mettre le title en grid
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
- [ ] ~~ liste de favoris a mettre en resultats de recherche !?~~

**10/01/2023**

- [x] ajouter une div absolute en mobile pour les filtres

**11/01/2023**

- [ ] reprendre les composants movie card pour reseparer certains comme le movie genre.
- [ ] reprendre les composants filter, creer un title generique, et un font generique avec props enfant
- [ ] decouvrir redux
