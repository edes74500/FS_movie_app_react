import { css } from "styled-components";

export const globalStyles = css`
  @font-face {
    font-family: "Feed";
    src: url("../assets/fonts/Interstellar.ttf") format("truetype");
  }

  :root {
    --main-color: 2, 16, 27;
    --secondary-color: 255, 172, 7; // Exemple de couleur secondaire
    --font-size: 16px; // Exemple de taille de police globale
    --tablet-size: 1024px;
    --phone-size: 768px;
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
  "#554a27", // Histoire
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
