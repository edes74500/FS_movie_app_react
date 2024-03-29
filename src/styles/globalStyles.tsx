import { css } from "styled-components";

const variables: { [key: string]: number } = {
  filterItemHeight: 35,
};

const globalStyles = css`
  @font-face {
    font-family: "Feed";
    src: url("../assets/fonts/Interstellar.ttf") format("truetype");
  }

  :root {
    --main-color: 2, 16, 27;
    --primary-color: rgb(1, 9, 15); // Exem
    --primary-color: rgb(9, 10, 31); // Exem
    --primary-color: #333339; // Exem
    --primary-color: #272727; // Exem
    --secondary-color: rgba(255, 172, 7, 1); // Exemple de couleur secondaire
    --secondary-color-07: rgba(255, 172, 7, 0.7); // Exemple de couleur secondaire
    --secondary-color-08: rgba(255, 172, 7, 0.8); // Exemple de couleur secondaire
    --secondary-color-05: rgba(255, 172, 7, 0.5); // Exemple de couleur secondaire
    --text-color-blue: rgb(112, 134, 153);
    --button-movie-color: rgb(143, 169, 191); //
    --nav-bar-color: #171717; // Exem
    --single-movie-card-background-color: #292929; // Exem
    --single-movie-card-background-color: #1e1e1e; // Exem

    //Filters Colors
    --filer-gategory-header-color: #292929;
    --filer-gategory-header-color: #1c1c1c;
    /* --filer-gategory-header-color: #a91010; */
    --filter-categery-header-text-color: #dadbdd; //
    --item-category-color: #404040; //
    --item-category-text-color: #ffffff; //
    --filter-reset-button-color: rgb(105, 126, 147);
    /* --filter-selected-color: #ffac0774; */
    --filter-selected-color: rgb(52, 104, 157);
    --filter-hover-color: #006fde5c;
    /* --filter-selected-color: rgb(57, 112, 167); */
    --range-selected-color: rgb(255, 172, 7, 1);
    --range-rail-color: rgb(255, 172, 7, 1);

    //filters Variables
    --filter-item-height: 50px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--primary-color);
    color: white;
    font-family: "Lato", sans-serif;
  }

  html {
    scrollbar-width: thin;
  }

  /* Style de la poignée (la partie que vous faites glisser) pour Firefox */
  html::-moz-scrollbar-thumb {
    background-color: #4caf50; /* Couleur de fond de la poignée */
    border-radius: 6px; /* Coins arrondis de la poignée */
  }

  /* Style de la piste (la partie sur laquelle la poignée se déplace) pour Firefox */
  html::-moz-scrollbar-track {
    background-color: #f1f1f1; /* Couleur de fond de la piste */
  }
  html {
    overflow-y: scroll;
    scrollbar-width: thin;
    /* Largeur de la barre de défilement */
    ::-webkit-scrollbar {
      width: 8px;
    }

    /* Style de la poignée (la partie que vous faites glisser) */
    ::-webkit-scrollbar-thumb {
      background-color: $navbar_color-link-active; /* Couleur de fond de la poignée */
      border-radius: 2px; /* Coins arrondis de la poignée */
    }

    /* Style de la piste (la partie sur laquelle la poignée se déplace) */
    ::-webkit-scrollbar-track {
      background-color: #f1f1f100; /* Couleur de fond de la piste */
    }
  }
  body {
    scrollbar-gutter: stable;
  }

  /* Changer la couleur de fond lors de la sélection */
  ::selection {
    background-color: #3498db62; /* Couleur de fond lors de la sélection */
    color: #fff; /* Couleur du texte lors de la sélection */
  }

  /* Changer la couleur de fond pour Firefox */
  ::-moz-selection {
    background-color: #3498db80;
    color: #fff;
  }
`;

// couleurs pour les films, push lors de la request API
export const couleursGenresFilm = [
  "#4d9154", // Action
  "#479483", // Aventure
  "#9633ff", // Animation
  "#c1ae04", // Comedie
  "#72273d", // Crime
  "#ff004c", // Documentaire
  "#33e0ff", // Drame
  "#36ea42", // Familliale
  "#af604f", // Fantastique
  "#462977", // Histoire
  "#b99c29", // Horreur
  "#FFC300", // Musique
  "#FF5733", // Mystère
  "#fb00ff", // Romance
  "#FF5733", // Science-Fiction
  "#ff00cc", // Téléfilm
  "#5233ff", // Thriller
  "#FFC300", // Guerre
  "#ff33e7", // Western
];

export const shownGenresFilm = [
  `Action`,
  `Aventure`,
  `Animation`,
  `Comedie`,
  `Crime`,
  `Documentaire`,
  `Drame`,
  `Familliale`,
  `Fantastique`,
  `Histoire`,
  `Horreur`,
  `Musique`,
  `Mystère`,
  `Romance`,
  `Science-Fiction`,
  `Téléfilm`,
  `Thriller`,
  `Guerre`,
  `Western`,
];

export { variables, globalStyles };
