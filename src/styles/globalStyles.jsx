import { css } from "styled-components";

export const globalStyles = css`
  @font-face {
    font-family: "Feed";
    src: url("../assets/fonts/Interstellar.ttf") format("truetype");
  }

  :root {
    --main-color: 2, 16, 27;
    --primary-color: rgb(2, 16, 27); // Exem
    --secondary-color: rgb(255, 172, 7); // Exemple de couleur secondaire
    --blue-color: rgb(30, 144, 255); // Exemple de couleur secondaire
    --text-color-blue: rgb(143, 169, 191);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: rgb(var(--main-color));
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
  // `Action`,
  // `Aventure`,
  // `Animation`,
  // `Comedie`,
  // `Crime`,
  // `Documentaire`,
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
